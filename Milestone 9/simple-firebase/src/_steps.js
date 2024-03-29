/**
 * -------------------------
 * INITIAL SETUP
 * -------------------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app (create config)
 * 4. install firebase : npm i firebase
 * 5. Add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 *
 * -------------------------
 * INTEGRATION SETUP
 * -------------------------
 * 7. go to docs -> build -> authentication -> web -> get started
 * 8. export your firebase config app
 * 9. Login.jsx : import { getAuth } from "firebase/auth" and create const auth = getAuth(app)
 *
 * -------------------------
 * PROVIDER SETUP
 * -------------------------
 * 10. import GoogleAuthProvider from firebase/auth and create const provider = new GoogleAuthProvider()
 * 11. import { signInWithPopup } from 'firebase/auth'; and create signInWithPopup(auth, provider) promise
 * 12. import { RouterProvider } from 'react-router-dom';
Activate sign in method (google, facebook, github, etc.)
 * 13. [vite]: change 127.0.0.1 to localhost
 * 
 * -------------------------
 * More Auth RouterProvider
 * -------------------------
 * 1. Activate the auth provider (create app, provide redirect url  client id and client secret)
 * 2. 
 */
