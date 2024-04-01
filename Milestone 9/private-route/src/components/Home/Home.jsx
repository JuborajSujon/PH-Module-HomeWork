import { useEffect, useState } from "react";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="text-center">
        <button
          onClick={() => setToggle(!toggle)}
          className="btn btn-sm btn-success">
          Toggle
        </button>
      </div>
      <div className="text-center my-12">{toggle && <MyComponent />}</div>
    </>
  );
};

const MyComponent = () => {
  // useEffect with dependency array
  // use handle scroll with cleanup function
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect with call back and dependency array
  // Use setInervalfn to clear the interval
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("inside component");
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <h2 className="text-xl text-red-500">
        Conditional rendering is working ....!
      </h2>
    </div>
  );
};

export default Home;
