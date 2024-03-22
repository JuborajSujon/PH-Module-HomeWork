import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Anuty/Aunty";
import "./Grandpa.css";
import { createContext, useState } from "react";
export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Money : {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset} />
            <Uncle asset={asset} />
            <Aunty />
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value, Value could be anything
 * 3. useContext to access value in the context api
 */
