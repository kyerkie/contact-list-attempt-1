import { Switch, Route } from "react-router-dom";
import User from "./User";
import Form from "./Form";
import Home from "./Home"

const UserList = ({ users, addUser }) => (

  <Switch>
    <Route
      path="/new"
      render={(routerProps) => (
        <Form history={routerProps.history} users={users} addUser={addUser} />
      )}
    />

    <Route
      path="/:number"
      render={(routerProps) => (
        <User
          userId={parseInt(routerProps.match.params.number, 10)}
          users={users}
        />
      )}
    />

    <Route path="/" render={() => <Home users={users} />} />
  </Switch>
);

export default UserList;
