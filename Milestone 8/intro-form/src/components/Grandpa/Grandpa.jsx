import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Anuty/Aunty";
import "./Grandpa.css";

const Grandpa = () => {
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Dad asset={asset} />
        <Uncle asset={asset} />
        <Aunty />
      </section>
    </div>
  );
};

export default Grandpa;
