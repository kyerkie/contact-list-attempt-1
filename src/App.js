import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import UserList from "./UserList";
import Form from "./Form";
import UserDetail from "./UserDetail";

const App = () => {
  const [users, setUsers] = useState([
    { imageURL: "", name: "Ben Blocker", email: "G", phone: "555-5555" },
  ]);

  const addUser = (user) => {
    setUsers((users) => {
      return [...users, user];
    });
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" 
        render={() => <Home addUser={addUser} users={users} />}
        />
        <Route
          path="/UserList"
          render={() => <UserList addUser={addUser} users={users} />}
        />
        <Route path="/Form" component={Form} />
        <Route path="/UserDetail" component={UserDetail} />
      </Switch>
    </div>
  );
};

export default App;
