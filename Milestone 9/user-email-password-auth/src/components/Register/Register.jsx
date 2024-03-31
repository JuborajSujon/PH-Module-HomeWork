const Register = () => {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-xl">Please Register</h2>
      <form className="mt-4 space-y-4">
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
