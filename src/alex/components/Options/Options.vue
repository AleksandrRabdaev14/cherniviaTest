<template>
  <div class="options grid">
    <div class="options-item">
      <div class="heading fs14 tb">
        SC
      </div>
      <div class="description fs12 lhr">
        Room with <br>
        kitchen
      </div>
    </div>
    <div class="options-item">
      <div class="heading fs14 tb">
        RO/OB
      </div>
      <div class="description fs12 lhr">
        Bed only <br>
        Room only
      </div>
    </div>
    <div class="options-item">
      <div class="heading fs14 tb">
        Breakfast
      </div>
      <div class="description fs12 lhr">
        <span class="fs8 black3">from</span> <span class="tb fs8 black">€</span> <span class="fs16 lhr tb black">10</span><br>
        <span class="black fs10 lhr">per person</span>
      </div>
    </div>
    <div class="options-item">
      <div class="heading fs14 tb">
        Half Board
      </div>
      <div class="description fs12 lhr">
        <span class="fs8 black3">from</span> <span class="tb fs8 black">€</span> <span class="fs16 lhr tb black">25</span><br>
        <span class="black fs10 lhr">per person</span>
      </div>
    </div>
    <div class="options-item">
      <div class="heading fs14 tb">
        Full Board
      </div>
      <div class="description fs12 lhr">
        <span class="fs8 black3">from</span> <span class="tb fs8 black">€</span> <span class="fs16 lhr tb black">40</span><br>
        <span class="black fs10 lhr">per person</span>
      </div>
    </div>
    <div class="options-item">
      <div class="heading fs14 tb">
        Full Board
      </div>
      <div class="description fs12 lhr">
        <span class="fs8 black3">from</span> <span class="tb fs8 black">€</span> <span class="fs16 lhr tb black">40</span><br>
        <span class="black fs10 lhr">per person</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.options {
  grid-gap: 1rem .5rem;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  &-item {
    padding: 10px 10px 14px;
    border: 1px solid $border-color;
    display: inline-block;
    box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
    .heading {
      line-height: 18px;
      color: $def-dark;
    }
  }
}
</style>
