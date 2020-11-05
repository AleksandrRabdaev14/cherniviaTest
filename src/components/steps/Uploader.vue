<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      <b>Non hai foto?</b><br>
      No problem. Puoi saltare questo passo e aggiungerli in seguito nel menu del tuo profilo.
    </div>

    <div class="uploader mb2 mt2">

      <!-- Preview list -->
      <span 
        v-for="(item, i) of list"
        :key="'preview_'+i"
        class="uploader-item" 
        :class="item.data ? 'preview-item' : ''"
        :style="`background-image: url(${(item.type === 'image' ? item.url : require('@/assets/img/video-bg.jpg'))});`"
      >
        <button class="uploader-item-delete" @click="deleteFile(i)">
          <svg class="ic20 icred">
            <use xlink:href="@/assets/icons/sprite.svg#close"></use>
          </svg>
        </button>
        <span v-if="item.data && item.progressFile < 99" class="uploader-item-mess">
          <span :style="`width: ${item.progressFile}%;`"></span>
          {{ getFileSize(item.data.size) }}
        </span>
      </span>

      <!-- Add file btn -->
      <div class="uploader-main hfull">
        <input 
          type="file" 
          name="files" 
          id="files" 
          accept="
            image/jpeg,
            image/png,
            image/tiff,
            video/*
          "
          multiple
          @change="addFile"
        >
        <label class="btn flex ggap1 jcc aic tcenter hfull" for="files">
          <svg class="ic24 icdef">
            <use xlink:href="@/assets/icons/sprite.svg#plus"></use>
          </svg>
          Upload file
        </label>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['media'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'media', [])
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data: () => ({
    list: []
  }),

  watch: {
    value: {
      handler (val) {
        this.checkValidation(val[val.length - 1].media)
      },
      deep: true
    },
    list: {
      handler (val) {
        this.checkValidation(val)
      },
      deep: true
    }
  },

  computed: {
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    },

    countUploaded () {
      let count = 0
      for (let i = 0; i < this.list.length; i++) {
        const element = this.list[i];
        if (element.uploaded) {
          count++
        }
      }
      return count
    }
  },

  methods: {
    checkValidation () {
      // let res = true
      // if (data.length > 0) { res = false }
      this.$emit('invalid-state', false)
    },
    
    deleteFile (index) {
      this.list.splice(index, 1)
    },

    getFileSize (fsize) {
      let fSExt = new Array('Bytes', 'KB', 'MB', 'GB')
      let i = 0
      while (fsize > 900) { 
        fsize/=1024; 
        i++; 
      }
      let exactSize = (Math.round(fsize*100)/100)+' '+fSExt[i]
      return exactSize
    },

    addFile (e) {
      const files = e.target.files
      if (files.length > 0) {

        for (let i = 0; i < files.length; i++) {
          const file = files[i]

          // Если картинка
          if (file.type.match('image.*')) {
            let readerImage = new FileReader();
            readerImage.readAsDataURL(file);

            // Если файл загружен и читается
            readerImage.onload = () => {
              const res = {
                data: file,
                type: 'image',
                url: readerImage.result,
                progressFile: 0
              }
              this.list.push(res)
              res.index = this.list.length - 1
              this.list[res.index] = res
            };

            // Если файл не удалось подгрузить или прочитать
            readerImage.onerror = () => {
              console.log(readerImage.error);
            };
          } 
          
          // Если видео
          else if (file.type.match('video.*')) {
            let readerVideo = new FileReader();
            readerVideo.readAsDataURL(file);

            // Если файл загружен и читается
            readerVideo.onload = () => {
              const res = {
                data: file,
                type: 'video',
                url: readerVideo.result,
                progressFile: 0
              }
              this.list.push(res)
              res.index = this.list.length - 1
              this.list[res.index] = res
            };

            // Если файл не удалось подгрузить или прочитать
            readerVideo.onerror = () => {
              console.log(readerVideo.error);
            };
          } 

          // Если не видео и не картинка
          else {
            console.log('ошибка, не изображение и не видео');
          }

        }

      }
    },

    async beforeNext () {
      for (let i = 0; i < this.list.length; i++) {
        const file = this.list[i];
        console.log(file)
        
        if (file.data) {
          const formData = new FormData()
          formData.append('file', file.data)
          formData.append('upload_preset', 'ml_default')
          formData.append('api_key', "471827171648562")
          
          const res = await axios.post('https://api.cloudinary.com/v1_1/stikbomb/auto/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function(progressEvent) {
              this.list[file.index].progressFile = parseInt(Math.round(( progressEvent.loaded / progressEvent.total) * 100));
            }.bind(this)
          })
          console.log(res)
          if (res.status === 200) {
            const newData = {
              type: file.type,
              url: res.data.url
            }
            this.list.splice(file.index, 1, newData)
            this.modelValue[this.modelValue.length - 1].media = this.list
          }
        }

      }
      return true
    }
  },

  mounted () {
    if (this.modelValue[this.modelValue.length - 1].media.length > 0) {
      this.list = this.modelValue[this.modelValue.length - 1].media
    }
    this.checkValidation(this.list)
    
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Загрузка файлов', 
      en: 'Uploader',
      it: 'Servizi e comodità'
    })
  }
}
</script>

<style lang="scss">
.uploader {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  &-preview {
    position: fixed;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    overflow: hidden auto;
    padding: 60px 0 0;

    &-wrapper {
      background-color: #FFF;
      padding: 20px;
      margin: auto 0 0;
      border-radius: 10px 10px 0 0;

      & > img {
        width: 100%;
        height: auto;
        border: $border-1;
      }
    }

    &-btns {
      position: sticky;
      bottom: 0;
      z-index: 100;
      background: #FFF;
      padding: 10px 0;
    }
  }

  &-main {
    & > input {
      display: none;
    }
    & > label {
      height: 100px;
      color: $def;
      background-color: #FFF;
      border: 2px $def dashed;

      &:hover, &:active {
        background-color: #FFF;
      }
    }
  }

  &-item {
    width: auto;
    height: 100px;
    background-color: #EEE;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: $border-1;
    position: relative;
    z-index: 1;
    border-radius: 5px;
    transform: scale(1);
    transition: .3s;

    // &.preview-item {
    //   filter: grayscale(1);
    // }
    &:active {
      transform: scale(0.95);
      transition: .3s;
    }

    &-mess {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: #000;
      color: #FFF;
      text-align: center;
      padding: 2px 5px;
      border-radius: 0 0 4px 4px;
      overflow: hidden;

      & > span {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0%;
        background-color: $green;
      }
    }

    &-delete {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: #FFF;
      border-radius: 100px;
      left: -10px;
      top: -10px;
      box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
      position: absolute;
      z-index: 2;
    }
  }
}
</style>
