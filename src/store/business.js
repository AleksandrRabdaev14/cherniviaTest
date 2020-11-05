import axios from "axios"

export default {
  namespaced: true,
  state: {
    categories: [],
    subCategories: [],
    regions: [],
  },

  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    },
    setSubCategories (state, payload) {
      state.subCategories = payload
    },
    setRegions (state, payload) {
      state.regions = payload
    }
  },

  actions: {
    // GET
    async getCategories ({ commit, rootState }) {
      const response = await axios.get(`${rootState.baseUrl}/category/all/`)
      commit('setCategories', response.data.result)
    },
    async getSubCategories ({ commit, rootState }, id) {
      const response = await axios.get(`${rootState.baseUrl}/category/${id}/activities/`)
      commit('setSubCategories', response.data.result)
    },
    async getRegions ({ commit, rootState }) {
      const response = await axios.get(`${rootState.baseUrl}/region/all/`)
      commit('setRegions', response.data.results)
    },

    // POST
    async sendData ({ commit, rootState }, payload) {
      // Чистим объект
      // for (const key in payload) {
      //   if (payload.hasOwnProperty(key)) {
      //     const element = payload[key];
      //     // Какая то логика
      //   }
      // }
      
      if (rootState.accessToken) {
        const response = await axios.post(`${rootState.baseUrl}/apartment_advert/create/`, payload, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${rootState.accessToken}`
          }
        })
        commit('setRegions', response.data.results)
        return true
      } 
      
      else {
        return false
      }
    },
  },

  getters: {
    categories: s => s.categories,
    subCategories: s => s.subCategories,
    regions: s => s.regions
  }
}
