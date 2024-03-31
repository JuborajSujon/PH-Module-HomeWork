import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./../../firebase config/firebase.config";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log("Error", err.message));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 mx-auto border-2 border-blue-500 p-5">
        <h2 className="text-2xl">Please Register</h2>
        <form onSubmit={handleRegister} className="mt-4 space-y-4">
          <input
            className="w-full input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <input
            className="w-full input"
            type="password"
            name="password"
            placeholder="password"
          />
          <br />
          <div className="text-center">
            <input
              className="btn btn-primary w-1/2"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
