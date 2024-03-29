import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then.catch;
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Login</button>
    </div>
  );
};

export default Login;
