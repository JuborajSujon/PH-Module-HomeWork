import useInputState from "../../hooks/useInputState";
import useInputStateV2 from "../../hooks/useInputStateV2";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("Jamal");
  const emailState = useInputStateV2("one@example.com");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(emailState.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    // console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <input
          {...emailState}
          type="text"
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
