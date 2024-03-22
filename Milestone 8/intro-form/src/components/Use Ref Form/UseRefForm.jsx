import { useEffect, useRef } from "react";

const UseRefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      phoneRef.current.value
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <input
          ref={emailRef}
          type="text"
          name="email"
          defaultValue={"one@one.com"}
          placeholder="Enter your email"
        />
        <br />
        <input
          ref={phoneRef}
          type="number"
          name="phone"
          placeholder="Enter your phone"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UseRefForm;
