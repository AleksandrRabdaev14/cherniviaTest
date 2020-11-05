export default function isGuest ({ next, store }) {
  if(store.getters.auth){
    return next({
      name: 'business'
    })
  }
 
  return next()
}
