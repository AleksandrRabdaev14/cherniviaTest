<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb">
      Стили для текстов 
      <span class="fs14">assets/css/text.scss</span>
    </h1>
    <!-- Dark Shadows -->
    <section class="mt3 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('fontsizes')">Текст стили</h2>

      <div v-if="has('fontsizes')" class="content" >
      <hr>

      <div class="flex ggap1">
        .fs <span><b>Размер шрифта</b>(7-24)</span>
      </div>
        <div class="flexcol">

          <SshPre language="css" :dark="true">
            fs18 = font-size: 1.8rem;
          </SshPre>
          <div class="shadow-box sul mt2">
          <SshPre language="css" :dark="true" :copy-button="true">
            fs18
          </SshPre>
          </div>
        </div>
        
      </div>
    </section>

    <!-- Bright Shadows -->
    <section class="mt1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('text-examples')">Примеры использования</h2>

      <div v-if="has('text-examples')" class="content" >
      <hr>
      <div class="flex ggap1">
        Шрифты на все случаи жизни, для различных экранов в карточке и дашборде
      </div>
        <div class="grid gtc5">
            <h2>Arial</h2>
            <h4>weight</h4>
            <h4>size</h4>
            <h4>line-height</h4>
            <h4>Copy</h4>
        </div>
        <hr>


        <div class="font-ready grid gtc5 fpc">
          <div class="font-name asc">
            H1 Price Card
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            24
          </div>
          <div class="line-height asc">
            24
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fpc
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3 fbt">
          <div class="font-name asc">
            H2 big title
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            22
          </div>
          <div class="line-height asc">
            24
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fbt
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3 fh">
          <div class="font-name asc">
            H3 big title
          </div>
          <div class="font-weight asc">
            Regular
          </div>
          <div class="font-size asc">
            20
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fh
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3 fpcm">
          <div class="font-name asc">
            H3 price mini card
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            18
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fpcm
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3">
          <div class="font-name asc">
            H5 body/head
          </div>
          <div class="font-weight asc">
            Regular
          </div>
          <div class="font-size asc">
            16
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            prc
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3 fbtn">
          <div class="font-name asc">
            H5 button
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            16
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fbtn
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3 fsh">
          <div class="font-name asc">
            H6 subhead
          </div>
          <div class="font-weight asc">
            Regular
          </div>
          <div class="font-size asc">
            15
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fsh
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3 fshs">
          <div class="font-name asc">
            H7 subhead
          </div>
          <div class="font-weight asc">
            Regular
          </div>
          <div class="font-size asc">
            14
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            prc
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt3 fbhs">
          <div class="font-name asc">
            H7 boldsubhead
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            14
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            prc
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt2 fch">
          <div class="font-name asc">
            H8 card head
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            12
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fch
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt2 fih">
          <div class="font-name asc">
            H8 input head
          </div>
          <div class="font-weight asc">
            Regular
          </div>
          <div class="font-size asc">
            12
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fih
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt2 flu">
          <div class="font-name asc">
            H8 link
          </div>
          <div class="font-weight asc">
            Regular underline
          </div>
          <div class="font-size asc">
            12
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            flu
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt2 fd">
          <div class="font-name asc">
            H9 dashboard
          </div>
          <div class="font-weight asc">
            Regular
          </div>
          <div class="font-size asc">
            10
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fd
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt2 fdb">
          <div class="font-name asc">
            H9 dashboard
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            10
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fdb
          </SshPre>
          </div>
        </div>
        <div class="font-ready grid gtc5 mt2 fdbtn">
          <div class="font-name asc">
            H9 dashboard button
          </div>
          <div class="font-weight asc">
            Bold
          </div>
          <div class="font-size asc">
            8
          </div>
          <div class="line-height asc">
            120%
          </div>
          <div class="font-copy asc">
          <SshPre language="css" :dark="true" :copy-button="true">
            fdbtn
          </SshPre>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'TextStyles',

}
</script>

<style lang="scss" scoped>
.ssh-pre {
  margin: 0;
}
</style>
