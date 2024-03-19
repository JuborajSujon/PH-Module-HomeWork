import PropTypes from "prop-types";
import { IoCheckmarkCircle } from "react-icons/io5";
export default function Feature({ feature }) {
  return (
    <div>
      <div>
        <p className="flex items-center gap-2">
          <IoCheckmarkCircle className="text-green-500" />
          {feature}
        </p>
      </div>
    </div>
  );
}

Feature.propTypes = {
  feature: PropTypes.string,
};
