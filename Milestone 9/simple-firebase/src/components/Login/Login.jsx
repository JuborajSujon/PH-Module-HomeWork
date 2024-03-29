import {
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

  const handleGithubSignIn = () => {};
  return (
    <div>
      {/* user ? logout : sign in */}
      {user ? (
        <div>
          <button onClick={handleSignOut}>Google SignOut</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGithubSignIn}>Github Loging</button>
          <button onClick={handleGoogleSignIn}>Google Login</button>
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
