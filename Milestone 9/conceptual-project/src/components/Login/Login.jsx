const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    e.target.reset();
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
    </div>
  );
};

export default Login;
