import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

export default function PriceOption({ option }) {
  const { name, price, features } = option;
  return (
    <div className="card bg-blue-500 p-4 shadow-xl text-white space-y-4 flex flex-col">
      <h2 className="font-bold text-center">
        <span className="text-5xl">{price}</span>
        <span className="text-xl">/mon</span>
      </h2>
      <h4 className="text-2xl text-center">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <button className="btn bg-green-500 border-none w-full mt-12 font-blod hover:bg-green-900 text-white text-xl">
        Buy Now
      </button>
    </div>
  );
}

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
