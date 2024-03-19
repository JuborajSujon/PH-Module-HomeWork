import PropTypes from "prop-types";
export default function Link({ route }) {
  return (
    <li className="mr-10" key={route.id}>
      <a href={route.path}>{route.name}</a>
    </li>
  );
}

Link.propTypes = {
  route: PropTypes.object.isRequired,
};
