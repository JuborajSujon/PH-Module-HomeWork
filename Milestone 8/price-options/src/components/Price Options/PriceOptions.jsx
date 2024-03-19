import { priceOptions } from "../../priceOption";
import PriceOption from "../Price Option/PriceOption";
export default function PriceOptions() {
  return (
    <div className="m-10">
      <h2 className="text-3xl text-center underline mb-10 ">
        Best Prices in the town
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
}
