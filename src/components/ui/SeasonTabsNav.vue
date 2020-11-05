<template>
  <div class="seasons-tabs-nav">
    <TabsBox 
      class="mb2 mrminus2 mlminus2"
      :list="['Winter', 'Summer']"
    />
    <div class="seasons-tabs-nav-sub">
      <button :class="curSubBnt === 1 ? 'active' : ''" @click="curSubBnt = 1">Low<br>season</button>
      <button :class="curSubBnt === 2 ? 'active' : ''" @click="curSubBnt = 1">Middle<br>season</button>
      <button :class="curSubBnt === 3 ? 'active' : ''" @click="curSubBnt = 1">Hight<br>season</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    curMainBnt: 1,
    curSubBnt: 1
  })
}
</script>

<style lang="scss" scoped>
.seasons-tabs-nav {

  &-main {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    background-color: #F5F5F5;
    border-radius: 5px;

    & > button {
      border: 2px transparent solid;
      background-color: transparent;
      font-size: 1.2rem;
      padding: 0 10px;
      height: 28px;
      border-radius: 5px;

      &.active {
        background-color: #FFF;
        border-color: $green;
      }
    }
  }

  &-sub {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin: 1rem 0 0;
    align-items: center;

    & > button {
      border: 0;
      background-color: transparent;
      font-size: 1.2rem;
      font-weight: bold;
      padding: 0 10px;
      height: 38px;
      border-radius: 5px;
      position: relative;

      &.active {
        // box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
        height: 44px;
        box-shadow: 0px 2px 4px rgba(4, 71, 92, 0.25);

        &::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -5px;
          right: 0;
          transform: translateX(-50%);
          width: 80%;
          height: 2px;
          border-radius: 100px;
          background-color: #000;
          z-index: 1;
        }
      }

      &:nth-child(1) {
        background-color: #56CCF2;
        color: #FFF;

        &::before {
          background-color: #56CCF2;
        }
      }
      &:nth-child(2) {
        background-color: #FFCA26;
        color: #FFF;

        &::before {
          background-color: #FFCA26;
        }
      }
      &:nth-child(3) {
        background-color: #FA8722;
        color: #FFF;

        &::before {
          background-color: #FA8722;
        }
      }
    }
  }
}
</style>
