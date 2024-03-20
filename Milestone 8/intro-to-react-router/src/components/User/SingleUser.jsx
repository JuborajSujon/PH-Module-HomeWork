import { Link } from "react-router-dom";

const SingleUser = ({ userdata }) => {
  const { id, name, email, phone, website } = userdata;
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>
        <Link className="btn" to={`/users/${id}`}>
          Show Details
        </Link>
      </td>
    </tr>
  );
};

export default SingleUser;
