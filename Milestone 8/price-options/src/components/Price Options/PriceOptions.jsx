import React from "react";
import { priceOptions } from "../../priceOption";
import PriceOption from "../Price Option/PriceOption";
export default function PriceOptions() {
  return (
    <div>
      <h2 className="text-3xl text-center underline">
        Best Prices in the town
      </h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option} />
      ))}
    </div>
  );
}
