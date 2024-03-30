import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      {/* user ? logout : sign in */}
      {user ? (
        <div>
          <button onClick={handleSignOut}>SignOut</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGithubSignIn}>Github Loging</button>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleFacebookSignIn}>Facebook Login</button>
        </div>
      )}

      {user && (
        <div>
          <h3>User: {user?.displayName}</h3>
          <p>Email: {user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
