<template>
<div class="page">
  <div class="step">
  <div class="slidecontainer">
    <input type="range" min="1" max="6" step="1" v-model="sliderValue" class="rangeSlider">
  </div>
  </div>
</div>
</template>

<script>

export default {
  name: "InputRange",
  components: {

  },
  data() {
    return {
      sliderValue:0,
    }
  }
}
</script>

<style lang="scss" scoped>
input[type=range] {
  width: 100%;
  margin: 12px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  background: #27ae60;
  border: 2px solid #dadada;
  border-radius: 6px;
  width: 100%;
  height: 6px;
  cursor: pointer;
}
input[type=range]::-webkit-slider-thumb {
  margin-top: -14px;
  width: 30px;
  height: 30px;
  background: #27ae60;
  border: 9px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #27ae60;
}
input[type=range]::-moz-range-track {
  background: #27ae60;
  border: 2px solid #dadada;
  border-radius: 6px;
  width: 100%;
  height: 6px;
  cursor: pointer;
}
input[type=range]::-moz-range-thumb {
  width: 30px;
  height: 30px;
  background: #27ae60;
  border: 9px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
}
input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 14.6px 0;
  color: transparent;
  width: 100%;
  height: 6px;
  cursor: pointer;
}
input[type=range]::-ms-fill-lower {
  background: #27ae60;
  border: 2px solid #dadada;
  border-radius: 12px;
}
input[type=range]::-ms-fill-upper {
  background: none;
  border: 2px solid #dadada;
  border-radius: 12px;
}
input[type=range]::-ms-thumb {
  width: 30px;
  height: 30px;
  background: #27ae60;
  border: 9px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range]:focus::-ms-fill-lower {
  background: #27ae60;
}
input[type=range]:focus::-ms-fill-upper {
  background: transparent;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}



</style>
