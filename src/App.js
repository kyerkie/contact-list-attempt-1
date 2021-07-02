import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import UserList from "./UserList";
import Form from "./Form";
import UserDetail from "./UserDetail";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    {
      imageURL: "https://i.imgflip.com/419day.png",
      name: "Mr. Shockey",
      email: "shockfish@gmail.com",
      phone: "1-800-sho-cked",
    },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home addUser={addUser} users={users} />}
        />

        <Route
          path="/Form"
          render={(props) => (
            <Form history={props.history} users={users} addUser={addUser} />
          )}
        />

        <Route path="/UserDetail" component={UserDetail} />
      </Switch>
    </div>
  );
};

export default App;
