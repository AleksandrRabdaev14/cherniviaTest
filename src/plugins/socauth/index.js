const FBAuth = require("./facebookAuth")
const GGAuth = require("./googleAuth")

let vueAllAuth = {
  install (Vue, options){
    Vue.allAuth = () => {
      return {

        facebook: () => {
          // console.log(Vue);
          // console.log(options);
          return {
            init: () => {
              if (window.FB === undefined){
                FBAuth.fbInstallClient().then(() => {
                  return FBAuth.fbInitClient(options.facebook)
                }).then(() => {
                  console.log('%cFaceBook SDK is installed!', 'background: #0B86EE; color: #FFF; padding: 5px 10px; border-radius: 4px;')
                }).catch (e => console.error(e))
              }
            },
            signIn: FBAuth.fbSignIn
          }
        },

        google: () => {
          // console.log(Vue);
          // console.log(options);
          return {
            init: () => {
              if (window.gapi === undefined){
                GGAuth.ggInstallClient(options.google).then(() => {
                  return GGAuth.ggInitClient(options.google)
                }).then(() => {
                  console.log('%cGoogle API is installed!', 'background: #109D59; color: #FFF; padding: 5px 10px; border-radius: 4px;')
                }).catch (e => console.error(e))
              }
              else if (window.gapi !== undefined && window.gapi.auth2 === undefined) {
                console.log("gapi installed but is not init yet! Now init!")
                GGAuth.ggInitClient(options.google).then(() => {
                  console.log("gapi is installed and initialized!")
                })
              }
            },
            signIn: GGAuth.signIn,
            signOut: GGAuth.signOut,
            printInfo: GGAuth.printInfo
          }
        }

      }
    }
  }
}

// Easier for testing with older version
module.exports = vueAllAuth
