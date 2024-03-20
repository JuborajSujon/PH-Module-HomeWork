import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";

const User = () => {
  // state --> data
  // state --> loader
  // state --> error
  // use effect
  // use fetch --> state set data from api, loader, error
  const users = useLoaderData();

  // console.log(users);

  return (
    <section>
      <h3 className="text-3xl text-center underline mb-6 font-bold">
        Our Users Table
      </h3>
      <p className="text-xl font-bold">Total Users: {users.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <SingleUser key={user.id} userdata={user} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default User;
