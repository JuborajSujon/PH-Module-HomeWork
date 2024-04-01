import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase config/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const emailRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error
    setLoginError("");

    // reset success
    setLoginSuccess("");

    // Add login functionality
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          setLoginSuccess("User logged in successfully");
        } else {
          setLoginError("Please verify your email first");
        }
      })
      .catch((err) => {
        console.log("error", err);
        setLoginError(err.message);
      });
  };

  // Add Reset Password
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email", emailRef.current.value);
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setLoginError("Please provide a valid email");
      return;
    }

    // send validation email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoginSuccess(
          "Password reset sent to your email, check your email !"
        );
      })
      .catch((err) => {
        console.log("Error", err.massage);
        setLoginError(err.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />

                <label className="label">
                  <a
                    onClick={handleResetPassword}
                    className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
                {loginSuccess && (
                  <p className="text-green-600">{loginSuccess}</p>
                )}
              </div>

              <div>
                <p>
                  You don't have an account? please{" "}
                  <Link className="text-blue-600" to="/heroregister">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
