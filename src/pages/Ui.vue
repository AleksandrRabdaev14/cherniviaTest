<template>
  <div class="page">
    <h1>UI elements</h1>
    <InputText 
      class="mb20"
      uniq="uname"
      :label="$t('label__name')"
      :placeholder="$t('label__name')"
      v-model="user.name"
    />
    <InputEmail 
      class="mb20"
      uniq="uemail"
      placeholder="Email"
      v-model="user.email"
    />
    <InputSelect 
      class="mb20"
      uniq="list"
      :label="$t('placeholder__choose')"
      :list="list"
      v-model="user.listres"
    />
    <InputPassword 
      class="mb20"
      label="Password"
      uniq="pass"
      :isRepass="true"
      v-model="user.pass"
    />
    <hr>

    <div>
      <InputRadio 
        class="form-list"
        label="Radio label"
        name="rad[]"
        uniq="rad"
        :val="'rad'"
        v-model="user.rad"
      />
      <InputRadio 
        class="form-list"
        label="Radio label 2"
        name="rad[]"
        uniq="rad2"
        :val="'rad2'"
        v-model="user.rad"
      />
      <InputRadio 
        class="form-list"
        label="Radio label 3"
        name="rad[]"
        uniq="rad3"
        :val="'rad3'"
        v-model="user.rad"
      />
    </div>
    
    <hr>
    
    <div>
      <InputCheck 
        class="form-list"
        label="Check label 1"
        name="chk[]"
        uniq="chk"
        :val="'chk'"
        v-model="user.chk"
      />
      <InputCheck 
        class="form-list"
        label="Check label 2"
        name="chk[]"
        uniq="chk2"
        :val="'chk2'"
        v-model="user.chk"
      />
      <InputCheck 
        class="form-list"
        label="Check label 3"
        name="chk[]"
        uniq="chk3"
        :val="'chk3'"
        v-model="user.chk"
      />
    </div>

    <hr>

    <div>
      <InputSwitcher 
        class="form-list form-direction-rtl"
        label="Switcher label"
        name="switcher[]"
        uniq="switcher"
        :val="'switcher'"
        v-model="user.switcher"
      />
      <InputSwitcher 
        class="form-list form-direction-rtl"
        label="Switcher label 2"
        name="switcher[]"
        uniq="switcher2"
        :val="'switcher2'"
        v-model="user.switcher"
      />
    </div>
    <hr>
    <InputSwitcher 
      label="Switcher single"
      name="switcherSingle"
      uniq="switcherSingle"
      :val="'switcherSingle'"
      v-model="user.switcherSingle"
    />

    <hr>
    <h4>flex aic ggap10</h4>
    <div class="flex aic ggap10">
      <button class="btn btn--def">btn btn--def</button>
      <button class="btn btn--white">btn btn--white</button>
    </div>
    
    <hr>
    <h4>flex aic jcsb</h4>
    <div class="flex aic jcsb">
      <button class="btn btn--def">btn btn--def</button>
      <button class="btn btn--white">btn btn--white</button>
    </div>
    
    <hr>
    <h4>grid grid2 aic ggap10</h4>
    <div class="grid grid2 aic ggap10">
      <button class="btn btn--def" disabled="true">btn btn--def</button>
      <button class="btn btn--white" disabled="true">btn btn--white</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Ui',

  data: () => ({
    user: {
      name: '',
      email: '',
      pass: '',
      listres: '',
      rad: '',
      chk: [],
      switcher: [],
      switcherSingle: true
    },

    // For input-select component
    list: [
      {
        id: 1,
        name: 'Какой то первый пункт',
        value: '123'
      },
      {
        id: 2,
        name: 'Еще один',
        value: '789'
      }
    ]
  }),

  watch: {
    user: {
      handler (val) {
        console.log(val)
      },
      deep: true
    }
  }
}
</script>
