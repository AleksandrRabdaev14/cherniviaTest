export default function isAuth ({ to, next, store }){

  if(!store.getters.auth){
    if (to.query.token) {
      store.commit('setAuth', { refresh_token: to.query.token })
      return next()
    } 
    else {
      return next({
        name: 'auth'
      })
    }
  }
 
  return next()
}
