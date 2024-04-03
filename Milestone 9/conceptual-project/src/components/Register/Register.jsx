import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password === confirmPassword) {
      createNewUser(email, password)
        .then((res) => {
          // console.log(res.user);
        })
        .catch((err) => {
          console.log("Error", err.message);
        });
    }
    e.target.reset();
  };
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="space-y-4 w-2/5 border-2 border-slate-300 p-5 rounded-lg">
        <h2 className="text-2xl text-center">Register Now!</h2>
        <div className="space-y-2">
          <p className="text-lg font-semibold">Full Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-bordered w-full"
          />
        </div>
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
          <p className="text-lg font-semibold">Photo</p>
          <input
            type="text"
            name="photo"
            placeholder="Enter Your Photo"
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
        <div className="space-y-2">
          <p className="text-lg font-semibold">Confirm Password</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Your Password"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <button type="su" className="btn btn-primary w-full">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
