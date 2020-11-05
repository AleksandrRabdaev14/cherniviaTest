<template>
  <div class="page">
    <h1>Problem</h1>
    <InputText 
      class="mb20"
      uniq="uname"
      :label="$t('label__name')"
      :placeholder="$t('label__name')"
      v-model="problem.title"
    />
    <div class="flex aic ggap10 mb20">
      <InputText 
        uniq="ccode"
        label="Код страны"
        placeholder="+7"
        v-model="problem.code_country"
      />
      <InputText 
        class="wfull"
        uniq="phone"
        label="Номер телефона (без кода)"
        placeholder="(666) 555-44-33"
        v-model="problem.phone_number"
      />
    </div>
    <InputEmail 
      class="mb20"
      uniq="uemail"
      placeholder="Email"
      v-model="problem.possible_login"
    />
    <InputTextarea 
        class="mb20"
        uniq="message"
        label="Сообщение"
        placeholder=""
        v-model="problem.message"
    />
    <button class="btn btn--def wfull mt30" @click="doneProblem">Done</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Problem',

    data: () => ({
        problem: {
            title: 'фывфывфывфыв',
            code_country: '+7',
            phone_number: '2341232132',
            possible_login: 'qweqwe@mail.ru',
            message: 'asdfamdflasdkljfnajkslndjknfdkljs'
        }
    }),

    computed: {
        ...mapGetters([]),
    },

    methods: {
        ...mapActions(['restoreProblem']),
        ...mapMutations([]),

        doneProblem() {
            this.restoreProblem(this.problem)
        }
    }
}
</script>

<style>

</style>
