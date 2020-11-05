import Vue from 'vue'
import Vuex from 'vuex'
import business from '@/store/business'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      lang: 'en',
      baseUrl: 'https://3d-monster.info/api',
      auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null,
      refreshToken: '',
      accessToken: '',
      message: '',
      countIncorrectLogin: 0
    },

    mutations: {
      setToken (state, payload) {
        state.accessToken = payload
      },
      setLang (state, payload) {
        state.lang = payload
        localStorage.setItem('lang', payload)
      },
      setAuth (state, payload) {
        state.auth = payload
        localStorage.setItem('auth', JSON.stringify(payload))
      },
      setLeadData (state, payload) {
        state.leadData = { ...state.leadData, ...payload }
      },
      setError (state, payload) {
        state.message = payload
      },
      setCountIncorrectLogin (state) {
        state.countIncorrectLogin < 3 ? ++state.countIncorrectLogin : state.countIncorrectLogin = 0
      }
    },

    actions: {
      // Получаем токен для защищенных запросов
      async getAccessToken ({ commit }) {
        const payload = {
          refresh: this.state.auth.refresh_token
        }
        const response = await axios.post(`${this.state.baseUrl}/token/refresh/`, payload)
        commit('setToken', response.data.access)
      },

      // Авторизация
      async signIn({ commit }, payload) {
        const response = await axios.post(`${this.state.baseUrl}/account/login/`, payload)
        if(response.data.status === 'ok') {
          commit('setAuth', { ...response.data.user, refresh_token: response.data.refresh_token }) 
          return 'ok'
        } 
        // Errors 
        else if(response.data.msg === 'ERR_LOGIN_INVALID') {
          // commit('setError', 'Email or passwor is invalid!')
          commit('setCountIncorrectLogin')
          return 'Email or passwor is invalid!'
        }
        else if(response.data.msg === 'ERR_ACCOUNT_NOT_ACTIVATED') {
          return 'Account not activated! CCheck your email address.'
        }
        else {
          return 'This user is blocked!'
        }
      },

      // Не правильный синтаксис асинхронных функций!!!!!!!! Читай доки!!!!!
      async login({ commit }, data) {
        console.log(data)
        await axios
          .post(`${this.state.baseUrl}/account/login/`, data)
          .then(res => {

            if(res.data.status === 'ok') {
              commit('setAuth', { ...res.data.user, refresh_token: res.data.refresh_token }) 
            } 
            
            else if(res.data.msg === 'ERR_LOGIN_INVALID') {
              commit('setError', 'Email or passwor is invalid!')
              commit('setCountIncorrectLogin')
            }
            else if(res.data.msg === 'ERR_ACCOUNT_NOT_ACTIVATED')
              commit('setError', 'Account not activated! CCheck your email address.')
            else if(res.data.msg === 'ERR_USER_BLOCKED')
              commit('setError', 'This user is blocked!')
          })
          .catch(rej => console.log(rej))
      },

      async register(_, data) {

        console.log(data.code_country)
        
        const sendData = {
          ...data,
          account_type: 'B',
          code_country: Number(data.code_country.replace('+', '')),
          phone_number: Number(data.phone_number)
        }


        console.log('SendData', sendData)

        await axios
          .post(`${this.state.baseUrl}/account/register/`, sendData)
          .then(res => {

            console.log(res.data)

            if(res.data.status === 'ok') 
              // commit('setAuth', res.data.user)
              console.log('SUCCESS', res.data)
          })
          .catch(rej => console.log(rej))
      },

      async loginCode(_, data) {
        
        await axios
          .post(`${this.state.baseUrl}/account/register/`, data)
          .then(res => {
            const data = res.data

            if(data.status === 'ok') {
              console.log(data)
            }
          })
          .catch(rej => console.log(rej))
      },

      async restoreLogin({ commit }, data) {
        const sendData = {
          code_country: Number(data.code_country.replace('+', '')),
          phone_number: Number(data.phone_number)
        }
        console.log('Login', data)
        await axios
          .post(`${this.state.baseUrl}/account/restore/login/`, sendData)
          .then(res => {

            console.log(res)
        
            if(res.data.status === 'ok')
              commit('setError', '')
            else if(res.data.msg === 'ERR_PHONE_NOT_FOUND')
              commit('setError', 'Phone not found!')
            else if(res.data.msg === 'ERR_EMAIL_INVALID')
              commit('setError', 'Email invalid.')

          })
          .catch(rej => console.log(rej))
      },

      async restorePass({ commit }, data) {
        console.log('Pass', data)
        await axios
          .post(`${this.state.baseUrl}/account/restore/password/`, data)
          .then(res => {
            console.log(res)
        
            if(res.data.status === 'ok')
              commit('setError', '')
            else if(res.data.msg === 'ERR_EMAIL_NOT_FOUND')
              commit('setError', 'Email not found!')
            else if(res.data.msg === 'ERR_EMAIL_INVALID')
              commit('setError', 'Email invalid.')
          })
          .catch(rej => console.log(rej))
      },

      async newLogin(_, data) {
        await axios
        .post(`${this.state.baseUrl}/account/restore/login/new/`, data)
        .then(res => {
          const data = res.data

          if(data.status === 'ok') {
            console.log(data)
          }
        })
        .catch(rej => console.log(rej))
      },

      async newPass({ commit }, data) {
        console.log(data)
        await axios
          .post(`${this.state.baseUrl}/account/restore/password/new/`, data)
          .then(res => {
            const dataRes = res.data

            console.log(dataRes)

            if(dataRes.status === 'ok')
              commit('setError', '')
            else if(res.data.msg === 'ERR_INVALID_TOKEN')
              commit('setError', 'Token invalid!')
            else if(res.data.msg === 'ERR_EMAIL_NOT_FOUND')
              commit('setError', 'Email not found.')
              
          })
          .catch(rej => console.log(rej))
      },

      async restoreProblem(_, data) {
        const sendData = {
          ...data,
          code_country: Number(data.code_country.replace('+', '')),
          phone_number: Number(data.phone_number)
        }

        console.log(sendData)
        await axios
          .post(`${this.state.baseUrl}/account/restore/problem/`, sendData)
          .then(res => {
            const dataRes = res.data
            
            console.log(dataRes)

            if(data.status === 'ok') {
              // console.log(123)
            }
          })
          .catch(rej => console.log(rej))
      },
    },

    getters: {
      lang: s => s.lang,
      auth: s => s.auth,
      error: s => s.message,
      countIncorrectLogin: s => s.countIncorrectLogin
    },

    modules: {
      business
    }
})
