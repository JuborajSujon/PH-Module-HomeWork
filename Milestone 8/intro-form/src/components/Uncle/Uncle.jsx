import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Misu"} />
        <Cousin name={"Sohan"} />
      </section>
    </div>
  );
};

export default Uncle;
