import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Comments from "../components/comments/Comments";
import Comment from "../components/comments/Comment";
import EditComment from "../components/comments/EditComment";

import Users from "../components/users/Users";
import AddUser from "../components/users/AddUser";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comentarios" component={Comments} />
        <Route exact path="/comentarios/:id" component={Comment} />
        <Route exact path="/comentarios/edit/:id" component={EditComment} />
        <Route exact path="/usuarios" component={Users} />
        <Route exact path="/crear" component={AddUser} />
      </Switch>
    </Router>
  );
};

export default App;
