import { Link } from "react-router-dom";

const Home = ({ users }) => (
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="page-header">
          <h1 class="text-center">Yerkie's Contact List</h1>
        </div>

        <Link to="/Form">
          <button class="btn btn-primary">Add Contact</button>
        </Link>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.number}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={user.imageURL}
                    alt={user.name}
                    className="list-image"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Home;
