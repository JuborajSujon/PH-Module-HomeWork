import { useState } from "react";
const useInputStateV2 = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
export default useInputStateV2;
