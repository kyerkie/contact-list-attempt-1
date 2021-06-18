import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import UserList from "./UserList";
import Form from "./Form";
import UserDetail from "./UserDetail";
import {useHistory} from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([
    { imageURL: "", name: "", email: "", phone: "" },
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
        <Route
        path="/Form"
        render={() => <Form history={useHistory} addUser={addUser} users={users} />}
        />
        <Route path="/UserDetail" component={UserDetail} />
      </Switch>
    </div>
  );
};

export default App;
