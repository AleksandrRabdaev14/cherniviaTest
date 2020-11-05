/* eslint-disable */
let facebookAuth = {
  
  async fbInstallClient () {
    // fbClientScript.setAttribute("src", "https://connect.facebook.net/en_US/sdk.js#version=v8.0&appId=381714539542586&status=true&cookie=true&xfbml=true")
    // fbClientScript.setAttribute("src", "https://connect.facebook.net/en_US/sdk.js")
    // fbClientScript.setAttribute("src", "https://connect.facebook.net/en_US/all.js")
    const fbClientScript = document.createElement("script")
    fbClientScript.src = "https://connect.facebook.net/en_US/all.js"
    fbClientScript.type = 'text/javascript'
    fbClientScript.async = true
    fbClientScript.crossorigin = "anonymous"
    document.getElementsByTagName('head')[0].appendChild(fbClientScript)
    // await document.head.appendChild(fbClientScript)
  },

  fbInitClient (configs) {
    setTimeout(() => {
      window.fbAsyncInit = function() {
        FB.init(configs)
      }
    }, 500)
  },
  
  async fbSignIn (successCallback, errorCallback) {
    await FB.getLoginStatus(function(response) {

      if (response.status === "connected"){
        console.log('connected',response)
        var url = '/me?fields=id,name,email';
        FB.api(url, function(res) {
          // console.log(res);
          successCallback(res)
        }, {scope: 'email'});
      }
      else {
        FB.login(function(response){
          if (response.status === "connected"){
            console.log("Signed in and connected.", response)
            FB.api('/me?fields=id,name,email', function(res) {
              // console.log(res);
              successCallback(res)
            }, {scope: 'email'});
          } else {
            // console.log("Something went wrong while logging in", response)
            errorCallback(response)
          }    
        }, {scope: 'public_profile,email'})
      }

    })
  }
}

module.exports = facebookAuth
