<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb">
      Flex'ы и Grid'ы
      <span class="fs14">assets/css/flexgrid.scss</span>
    </h1>
    <!-- Flex -->
    <section class="mt3 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('flex')">Flex'ы</h2>

      <div v-if="has('flex')" class="content">
        <hr>

        <div class="mb2">
          .flex <span><b>вариации</b>(wrap col)</span>
        </div>
        <small>Пример</small>
        <SshPre class="m0" language="css" :dark="true">
          flexwrap = flex-wrap: wrap;
        </SshPre>

        <small>Пример</small>
        <SshPre class="m0" language="css" :dark="true">
          flexcol = flex-direction: column;
        </SshPre>
        <hr>
        <!-- Aligns -->
        <div class="mb2">
          .ai <span><b>align-items</b>(fs-c-fe)</span>
        </div>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          aifs = align-items: flex-start;
        </SshPre>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          aic = align-items: center;
        </SshPre>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          aife = align-items: flex-end;
        </SshPre>

        <hr>
        <!-- Justify -->
        <div class="mb2">
          .jc <span><b>justify-content</b>(c-sb-sa-fs-fe)</span>
        </div>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          jcc = justify-content: center;
        </SshPre>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          jcsb = justify-content: space-between;
        </SshPre>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          jcsa = justify-content: space-around;
        </SshPre>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          jcfs = justify-content: flex-start;
        </SshPre>
        <small>Пример</small>
        <SshPre class="mb1" language="css" :dark="true">
          jcfe = justify-content: flex-end;
        </SshPre>
        
      </div>
    </section>
    <!-- Grids -->
    <section class="mt1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('grids')">Grid'ы</h2>

      <div v-if="has('grids')" class="content">
        <hr>

        <div class="mb2">
          .gtc <span><b>grid-template-columns</b>(2-3-4-auto)</span>
        </div>
        <small>Пример</small>
        <SshPre class="m0" language="css" :dark="true">
          gtc2 = grid-template-columns: repeat(2, 1fr);
        </SshPre>
        <hr>


        <div class="mb2">
          .gtc <span><b>grid-template-rows</b>(2-3-4-auto)</span>
        </div>
        <small>Пример</small>
        <SshPre class="mb2" language="css" :dark="true">
          gtr4 = grid-template-rows: repeat(4, 1fr);
        </SshPre>
        <small>Пример #2</small>
        <SshPre class="m0" language="css" :dark="true">
          gtrauto = grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
        </SshPre>

        <hr>
        <div class="mb2">
          .ggap <span><b>grid-gap</b>(1-2-3-4-5)</span>
        </div>
        <small>Пример</small>
        <SshPre class="m0" language="css" :dark="true">
          ggap1 = grid-gap: 1rem;
        </SshPre>
        <!-- gtc2: * -->
        <hr>
        <div class="grid gtc">
          <div class="grid-item"></div>
        </div>
        
      </div>
    </section>
    

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>
