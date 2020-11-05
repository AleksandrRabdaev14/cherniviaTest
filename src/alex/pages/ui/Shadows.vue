<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb">
      Тени 
      <span class="fs14">assets/css/main.scss строка 814</span>
    </h1>
    <!-- Dark Shadows -->
    <section class="mt3 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('darkShadows')">Темные тени</h2>

      <div v-if="has('darkShadows')" class="content" >
      <hr>

      <div class="flex ggap1">
        .s <span><b>Виды темных теней</b>(ul-l-r-d)</span>
      </div>
        <div class="flexcol">

          <SshPre language="css" :dark="true">
            sul = box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.1);
          </SshPre>
          <div class="shadow-box sul mt2">
          <SshPre language="css" :dark="false" :copy-button="true">
            sul
          </SshPre>
          </div>
        </div>
        <div class="flexcol">

          <SshPre language="css" :dark="true">
            sl = box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
          </SshPre>
          <div class="shadow-box sl mt2">
          <SshPre language="css" :dark="false" :copy-button="true">
            sl
          </SshPre>
          </div>
        </div>
        <div class="flexcol">

          <SshPre language="css" :dark="true">
            sr = box-shadow: 0px 7px 15px rgba(6, 37, 83, 0.15);
          </SshPre>
          <div class="shadow-box sr mt2">
          <SshPre language="css" :dark="false" :copy-button="true">
            sr
          </SshPre>
          </div>
        </div>
        <div class="flexcol">

          <SshPre language="css" :dark="true">
            sd = box-shadow: -2px -5px 10px rgba(218, 218, 218, 0.4), 4px 5px 10px rgba(218, 218, 218, 0.4);
          </SshPre>
          <div class="shadow-box sd mt2">
          <SshPre language="css" :dark="false" :copy-button="true">
            sd
          </SshPre>
          </div>
        </div>
      </div>
    </section>

    <!-- Bright Shadows -->
    <section class="mt1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('brightShadows')">Cветлые тени</h2>

      <div v-if="has('brightShadows')" class="content" >
      <hr>
      <div class="flex ggap1">
        .s <span><b>Виды светлных теней</b>(w)</span>
      </div>
        <div class="flexcol">

          <SshPre language="css" :dark="true">
            sw = box-shadow: 5px 5px 10px rgba(234, 234, 234, 0.2), -5px -5px 10px rgba(234, 234, 234, 0.2), 5px -5px 10px rgba(255, 255, 255, 0.9), -5px 5px 13px rgba(234, 234, 234, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(234, 234, 234, 0.5);
          </SshPre>
          <div class="shadow-box sw mt2">
          <SshPre language="css" :dark="false" :copy-button="true">
            sw
          </SshPre>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'Shadows',
  data: () => ({
    list1: [

    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
