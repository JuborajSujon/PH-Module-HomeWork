import { useState } from "react";
const useInputState = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChange];
};
export default useInputState;
