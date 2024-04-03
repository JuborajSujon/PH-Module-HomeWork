import { useContext } from "react";
import { HomeContext } from "./Home";

const ChildrenHome = () => {
  const { counter, handleCounter } = useContext(HomeContext);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleCounter} className="btn btn-primary">
        Increace Counter Value
      </button>
    </div>
  );
};

export default ChildrenHome;
