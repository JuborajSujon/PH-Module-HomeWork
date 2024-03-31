import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase config/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroRegister = () => {
  const [heroRegisterError, setHeroRegisterError] = useState("");
  const [heroRegisterSuccess, setHeroRegisterSuccess] = useState("");
  const [showPassowrd, setPassowrd] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const acceptedTerms = e.target.terms.checked;

    if (password.length < 6) {
      setHeroRegisterError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setHeroRegisterError(
        "Password must contain at least one uppercase letter"
      );
      return;
    } else if (!acceptedTerms) {
      setHeroRegisterError("Please accept terms and conditions");
      return;
    }

    // reset error
    setHeroRegisterError("");

    // reset success
    setHeroRegisterSuccess("");

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setHeroRegisterSuccess("User created successfully");
      })
      .catch((err) => {
        setHeroRegisterError(err.message);
        console.log("Error", err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
              <div className="relative">
                <input
                  type={showPassowrd ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  onClick={() => setPassowrd(!showPassowrd)}
                  className="label-text absolute top-1/2 right-3 -translate-y-1/2">
                  {showPassowrd ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control flex flex-row items-center gap-2">
              <input
                className="checkbox"
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label htmlFor="terms " className="label">
                <a className="text-blue-600" href="#">
                  Accept terms and conditions
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              {heroRegisterError && (
                <p className="text-red-600">{heroRegisterError}</p>
              )}
              {heroRegisterSuccess && (
                <p className="text-green-600">{heroRegisterSuccess}</p>
              )}
            </div>
            <div>
              <p>
                You have an account? please{" "}
                <Link className="text-blue-600" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
