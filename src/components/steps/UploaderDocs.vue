<template>
  <div class="step">
    <h1>Uploaded {{ countUploaded }} files</h1>
    <AlertBox 
      type="danger"
      message="Не более 7 фото и не более 2-х видео файлов. Разрешенные типы файлов: jpg, jpeg, png, tiff и любые видео форматы."
    />

    <div class="uploader mb2 mt2">

      <!-- Preview modal -->
      <div v-if="isPreview" class="uploader-preview">
        <div class="uploader-preview-wrapper" v-click-outside="closePreview">
          <video v-if="preview.type === 'video'" width="100%" controls :src="preview.url"></video>
          <img v-else :src="preview.url">
          <h3 class="m0 mt2">Il testo si lege bene?</h3>
          <p>documentul trebuie sa se vada bine, usor de citit si fara reflexe.</p>
          <div class="uploader-preview-btns flex aic jcsb">
            <button class="btn btn--red" @click="deleteFile(preview.index)">Delete</button>
            <button v-if="!preview.uploaded" class="btn btn--def" @click="uploadFile(preview)">
              <svg class="ic-20 ic-white mr1">
                <use xlink:href="@/assets/icons/sprite.svg#upload"></use>
              </svg>
              Upload (save)
            </button>
          </div>
        </div>
      </div>

      <!-- Preview list -->
      <span 
        v-for="(item, i) of list"
        :key="'preview_'+i"
        class="uploader-item" 
        :class="item.uploaded ? '' : 'preview-item'"
        :style="`background-image: url(${(item.type === 'image' ? item.url : require('@/assets/img/video-bg.jpg'))});`"
      >
        <button class="uploader-item-delete" @click="deleteFile(i)">
          <svg class="ic-20 ic-white">
            <use xlink:href="@/assets/icons/sprite.svg#close"></use>
          </svg>
        </button>
        <button class="uploader-item-edit" @click="editFile(i)">&nbsp;</button>
        <span v-if="item.progressFile < 99" class="uploader-item-mess">
          <span :style="`width: ${item.progressFile}%;`"></span>
          Not uploaded
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
          @change="addFile"
        >
        <label class="btn btn--def flexcol jcc aic t-center hfull" for="files">
          <svg class="ic-24 ic-def">
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
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  data: () => ({
    preview: '',
    isPreview: false,
    list: []
  }),

  watch: {
    value: {
      handler (val) {
        console.log('UPLOADER ', val)
        this.checkValidation(val)
      },
      deep: true
    },
    list: {
      handler (val) {
        console.log('previewList ', val)
        let res = []
        for (let i = 0; i < val.length; i++) {
          const element = val[i];
          if (element.uploaded) {
            res.push(element.url)
          }
        }
        this.$set(this.modelValue, 'images', res)
      },
      deep: true
    },
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
    checkValidation (data) {
      let res = true
      if (data.images.length > 0) { res = false }
      this.$emit('invalid-state', res)
    },

    closePreview () {
      this.preview = ''
      this.isPreview = false
    },
    
    deleteFile (index) {
      this.list.splice(index, 1)
      this.isPreview = false
    },

    editFile (index) {
      this.preview = this.list[index]
      this.preview.index = index
      this.isPreview = true
    },

    addFile (e) {
      const files = e.target.files
      if (files.length > 0) {
        const file = files[0]

        // Если картинка
        if (file.type.match('image.*')) {
          let readerImage = new FileReader();
          readerImage.readAsDataURL(file);

          // Если файл загружен и читается
          readerImage.onload = () => {
            const res = {
              data: file,
              type: 'image',
              uploaded: false,
              url: readerImage.result,
              progressFile: 0
            }
            this.list.push(res)
            res.index = this.list.length - 1
            this.preview = res
            this.isPreview = true
          };

          // Если файл не удалось подгрузить или прочитать
          readerImage.onerror = () => {
            console.log(readerImage.error);
          };
        } 
        
        // Если видео
        else if (file.type.match('video.*')) {
          let readerVideo = new FileReader();

          // Если файл загружен и читается
          readerVideo.onload = () => {
            const res = {
              data: file,
              type: 'video',
              uploaded: false,
              url: readerVideo.result,
              progressFile: 0
            }
            this.list.push(res)
            res.index = this.list.length - 1
            this.preview = res
            this.isPreview = true
          };

          readerVideo.readAsDataURL(file);
          // Если файл не удалось подгрузить или прочитать
          readerVideo.onerror = () => {
            console.log(readerVideo.error);
          };
        } else {
          console.log('ошибка, не изображение и не видео');
        }
      }
    },

    uploadFile (fileData) {
      this.isPreview = false
      const formData = new FormData()
      formData.append('file', fileData.data)
      formData.append('upload_preset', 'ml_default')
      formData.append('api_key', "471827171648562")

      axios.post('https://api.cloudinary.com/v1_1/stikbomb/auto/upload', 
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: function(progressEvent) {
            this.list[fileData.index].uploaded = true;
            this.list[fileData.index].progressFile = parseInt(Math.round(( progressEvent.loaded / progressEvent.total) * 100));
          }.bind(this)
        }
      ).then(res => {
        const newData = {
          data: res.data,
          type: fileData.type,
          uploaded: true,
          url: res.data.url
        }
        this.list.splice(fileData.index, 1, newData)
      }).catch(e => console.error(e))
    },

    getType(url) {
      let type = 'image'
      const res = url.substr(url.length - 4, url.length)
      if (
        res.indexOf('jpg') !== -1 || 
        res.indexOf('jpeg') !== -1 || 
        res.indexOf('png') !== -1 || 
        res.indexOf('tiff') !== -1
        ) { 
          type = 'image' 
      } else if (
        res.indexOf('mp4') !== -1 || 
        res.indexOf('mpeg') !== -1 || 
        res.indexOf('mov') !== -1 || 
        res.indexOf('flv') !== -1
      ) {
        type = 'video'
      }
      return type
    }
  },

  mounted () {
    this.checkValidation(this.value)
    if (this.value.images.length > 0) {
      for (let i = 0; i < this.value.images.length; i++) {
        const element = this.value.images[i];
        const item = {
          data: {},
          type: this.getType(element),
          uploaded: true,
          url: element
        }
        this.list.push(item)
      }
    }
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
        background-color: $def-hover;
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

    &.preview-item {
      filter: grayscale(1);
    }
    &:active {
      transform: scale(0.95);
      transition: .3s;
    }

    &-edit {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      border: 0;
      background-color: transparent;
      display: block;
      width: 100%;
     
      &:active {
        background-color: rgba(21, 99, 216, 0.4);
      }
    }

    &-mess {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: $red;
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
      background: red;
      border-radius: 100px;
      left: -10px;
      top: -10px;
      position: absolute;
      z-index: 2;
    }
  }
}
</style>
