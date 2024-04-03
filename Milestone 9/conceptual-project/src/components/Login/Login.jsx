import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithFacebook, setUser } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        // setUser(res.user);
        e.target.reset();
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        // setUser(res.user);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  };

  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((res) => {
        // setUser(res.user);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  };
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="space-y-4 w-2/5 border-2 border-slate-300 p-5 rounded-lg">
        <h2 className="text-2xl text-center">Login Now!</h2>
        <div className="space-y-2">
          <p className="text-lg font-semibold">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full "
          />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold">Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <button type="su" className="btn btn-primary w-full">
            Login
          </button>
        </div>
      </form>
      <div className="divider">OR</div>
      <div className="flex flex-col gap-2">
        <button onClick={handleGoogleLogin} className="btn btn-primary w-full">
          Login With Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="btn btn-primary w-full">
          Login With Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
