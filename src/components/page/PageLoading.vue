<template>
  <div class="page-load">&nbsp;</div>
</template>

<script>
export default {

}
</script>

<style>
.page-load {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgb(255 255 255 / 80%);
  background-image: url('../../assets/img/loading.svg');
  background-position: center;
  background-size: 80px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
