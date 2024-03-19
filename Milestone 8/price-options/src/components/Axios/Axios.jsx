import { useEffect, useState } from "react";
import axios from "axios";

export default function Axios() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  });
  console.log(users);
  return <div>Axios: {users.length}</div>;
}
