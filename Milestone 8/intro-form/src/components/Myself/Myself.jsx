import Special from "../Special/Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h2>Myself</h2>
      <section className="flex">
        <Special name="Angel" asset={asset} />
      </section>
    </div>
  );
};

export default Myself;
