import { useState } from "react";

const StateFullForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } else {
      setError("");
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Password: ", password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
        />
        <br />
        <input
          onChange={handleEmailChange}
          type="text"
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <br />

        <input type="submit" value="Submit" />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default StateFullForm;
