import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Misu"} asset={asset} />
        <Cousin name={"Sohan"} />
      </section>
    </div>
  );
};

export default Uncle;
