const Register = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 mx-auto border-2 border-blue-500 p-5">
        <h2 className="text-2xl">Please Register</h2>
        <form className="mt-4 space-y-4">
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
