<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb m0 mb3">
      Отступы 
      <span class="fs14">assets/css/spaces.scss</span>
    </h1>

    <!-- Margin -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('margin')">Margin</h2>

      <div v-if="has('margin')" class="content">
        <hr>

        <div class="flex ggap1 mb2">
          .m <span><b>направление</b>(l-t-r-b)</span> <span><b>размер</b>(0-05-15-1-2-3-4-5)</span>
        </div>
        <small>Пример</small>
        <SshPre class="m0" language="css" :dark="true">
          mr1 = margin-right: 1rem;
        </SshPre>

        <!-- margin: * -->
        <hr>
        <h3 class="m0">margin: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list" :key="'m_'+i">
            <b class="flex mt2 mb05">margin: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              m{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- margin-left: * -->
        <hr>
        <h3 class="m0">margin-left: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list" :key="'ml_'+i">
            <b class="flex mt2 mb05">margin-left: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              ml{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- margin-top: * -->
        <hr>
        <h3 class="m0">margin-top: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list" :key="'mt_'+i">
            <b class="flex mt2 mb05">margin-top: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              mt{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- margin-right: * -->
        <hr>
        <h3 class="m0">margin-right: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list" :key="'mr_'+i">
            <b class="flex mt2 mb05">margin-right: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              mr{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- margin-bottom: * -->
        <hr>
        <h3 class="m0">margin-bottom: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list" :key="'mb_'+i">
            <b class="flex mt2 mb05">margin-bottom: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              mb{{ item.value }}
            </SshPre>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Padding -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('padding')">Padding</h2>

      <div v-if="has('padding')" class="content">
        <hr>

        <div class="flex ggap1 mb2">
          .p <span><b>направление</b>(l-t-r-b)</span> <span><b>размер</b>(0-05-15-1-2-3-4-5)</span>
        </div>
        <small>Пример</small>
        <SshPre class="m0" language="css" :dark="true">
          pr1 = padding-right: 1rem;
        </SshPre>

        <!-- margin: * -->
        <hr>
        <h3 class="m0">padding: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list2" :key="'m_'+i">
            <b class="flex mt2 mb05">padding: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              m{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- padding-left: * -->
        <hr>
        <h3 class="m0">padding-left: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list2" :key="'ml_'+i">
            <b class="flex mt2 mb05">padding-left: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              ml{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- padding-top: * -->
        <hr>
        <h3 class="m0">padding-top: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list2" :key="'mt_'+i">
            <b class="flex mt2 mb05">padding-top: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              mt{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- padding-right: * -->
        <hr>
        <h3 class="m0">padding-right: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list2" :key="'mr_'+i">
            <b class="flex mt2 mb05">padding-right: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              mr{{ item.value }}
            </SshPre>
          </div>
        </div>
        
        <!-- padding-bottom: * -->
        <hr>
        <h3 class="m0">padding-bottom: *</h3>
        <div class="grid gtc4 ggap2">
          <div v-for="(item, i) of list2" :key="'mb_'+i">
            <b class="flex mt2 mb05">padding-bottom: {{ item.label }};</b>
            <SshPre class="m0" language="css" :dark="true" :copy-button="true">
              mb{{ item.value }}
            </SshPre>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  mixins: ['docMixin'],
  data: () => ({
    list: [
      {
        label: '-1rem',
        value: 'minus1'
      },
      {
        label: '-1.5rem',
        value: 'minus2'
      },
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: '0',
        value: '0'
      },
      {
        label: '0.5rem',
        value: '05'
      },
      {
        label: '1.5rem',
        value: '15'
      },
    ],
    list2: [
      {
        label: '0',
        value: '0'
      },
      {
        label: '0.5rem',
        value: '05'
      },
      {
        label: '1.5rem',
        value: '15'
      },
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
