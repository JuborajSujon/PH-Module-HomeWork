import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const HomeContext = createContext(null);
const Home = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const { user } = useContext(AuthContext);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="text-center space-y-4">
      <div>
        <h2>This section Home</h2>
      </div>
      <HomeContext.Provider
        value={{
          counter,
          handleCounter,
        }}>
        {children}
      </HomeContext.Provider>
      <div>{user?.email}</div>
    </div>
  );
};

export default Home;
