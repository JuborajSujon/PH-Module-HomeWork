import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Anuty/Aunty";
import "./Grandpa.css";
import { createContext } from "react";
const AssetContext = createContext("Gold");

const Grandpa = () => {
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <AssetContext.Provider value={asset}>
        <section className="flex">
          <Dad asset={asset} />
          <Uncle asset={asset} />
          <Aunty />
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value
 * 3.
 */
