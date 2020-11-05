<template>
<div class="page">
  <div class="pt2 grid ggap1 grid-gallery">
    <div class="grid-gallery__img">
      <img class="grid-img" src="./ui/img/Grid1.jpg" alt="">
      <img class="edit-png" src="./ui/img/edit.png" alt="">
    </div>
    <div class="grid-gallery__img">
      <img class="grid-img" src="./ui/img/Grid2.jpg" alt="">
      <img class="edit-png" src="./ui/img/edit.png" alt="">
    </div>
    <div class="grid-gallery__img">
      <img class="grid-img" src="./ui/img/Grid3.jpg" alt="">
      <img class="edit-png" src="./ui/img/edit.png" alt="">
    </div>
    <div class="grid-gallery__img">
      <img class="grid-img" src="./ui/img/Grid4.jpg" alt="">
      <img class="edit-png" src="./ui/img/edit.png" alt="">
    </div>
    <div class="grid-gallery__img">
      <img class="grid-img" src="./ui/img/Grid5.jpg" alt="">
      <img class="edit-png" src="./ui/img/edit.png" alt="">
    </div>
    <div class="grid-gallery__img">
      <img class="grid-img" src="./ui/img/Grid6.jpg" alt="">
      <img class="edit-png" src="./ui/img/edit.png" alt="">
    </div>
    <div class="grid-gallery__img">
      <img class="grid-img" src="./ui/img/Grid7.jpg" alt="">
      <img class="edit-png" src="./ui/img/edit.png" alt="">
    </div>

  </div>
</div>

</template>

<script>

export default {
  name: 'Alex',
  components: { 

   }
}
</script>

<style scoped lang="scss">
.grid-gallery {
  &__img {
    position: relative;
    &:nth-of-type(1) {
      grid-column: 1 / 6;
      grid-row: 1 / 3;
    }
    &:nth-of-type(2) {
    grid-column: 6 / 8;
    grid-row: 1 / 1;
    }
    &:nth-of-type(3) {
      grid-column: 6 / 8;
      grid-row: 2 / 2;
    }
    &:nth-of-type(4) {
      grid-column: 1 / 8;
      grid-row: 3 / 3;
    }
    &:nth-of-type(5) {
      grid-column: 1 / 4;
      grid-row: 4 / 4;
    }
    &:nth-of-type(6) {
      grid-column: 4 / 8;
      grid-row: 4 / 4;
    }
    &:nth-of-type(7) {
      grid-column: 1 / 8;
      grid-row: 5 / 5;
    }
  }
}
.edit-png {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.grid-img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
