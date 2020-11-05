import Vue from 'vue'
import socAuth from "./socauth/index"
// Vue.use(socAuth) 
Vue.use(socAuth, { 
  google: {
    client_id: "279361998326-1gp79gpadn6tle086ego9tki2jh6f2cg.apps.googleusercontent.com", 
    scope: "profile email",
  }, 
  facebook: {
    appId: "381714539542586",
    cookie: false,
    xfbml: false,
    version: "v8.0",
  }
})
Vue.allAuth().google().init()
Vue.allAuth().facebook().init()
export default socAuth

