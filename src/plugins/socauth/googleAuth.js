/* eslint-disable */
let googleAuth = {

  // Create script el
  async ggInstallClient (configs) {
    const ggClientScript = document.createElement("script")
    ggClientScript.src = "https://apis.google.com/js/platform.js"
    ggClientScript.async = true
    ggClientScript.defer = true
    
    const meta = document.createElement("meta")
    meta.name = "google-signin-client_id"
    meta.content = configs.client_id

    await document.head.appendChild(ggClientScript)
    document.head.appendChild(meta)
  },

  // Init
  ggInitClient (configs) {
    setTimeout(() => {
      if (configs !== undefined) window.gapi.load("auth2", () => window.gapi.auth2.init(configs))
      else console.log("Undefined configs for gapi! Initialized failed!")
    }, 500)
  },

 // Sign In
  async signIn (successCallback, errorCallback) {
    const res = await window.gapi.auth2.getAuthInstance().signIn()
    if (res.error) errorCallback(res)
    else successCallback(res)
  },

  // Sign Out
  async signOut (successCallback, errorCallback) {
    const res = await window.gapi.auth2.getAuthInstance().signOut()
    if (res.error) errorCallback(res)
    else successCallback()
  },

  // Print Info
  // https://developers.google.com/identity/sign-in/web/people
  printInfo: function(){
    if (window.gapi.auth2.getAuthInstance().isSignedIn.get()){
      // All printing should be removed in production.
      // console.log("This is auth2");
      // console.log(window.gapi.auth2);
      // Ok, you signed in
      // console.log("This is ins");
      let ins = window.gapi.auth2.getAuthInstance();
      // console.log(ins);
      //yes
      // console.log("This is googleUser");
      let googleUser = window.gapi.auth2.getAuthInstance().currentUser.get();
      // console.log(googleUser);
      //yes
      // console.log("This is profile");
      let profile = googleUser.getBasicProfile();
      // console.log(profile);
      // 
      console.log("Result: ID:"+profile.getId() + "FullName:"+profile.getName()+"Email:"+profile.getEmail()+"Img:"+profile.getImageUrl()+"FamilyName:"+profile.getFamilyName()+"GivenName:"+profile.getGivenName())
    } else {
      console.log("Yes, you haven't logged in yet!")
    }
  },
}

module.exports = googleAuth
