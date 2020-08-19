import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Comments from "../components/comments/Comments";
import Comment from "../components/comments/Comment";
import EditComment from "../components/comments/EditComment";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comentarios" component={Comments} />
        <Route exact path="/comentarios/:id" component={Comment} />
        <Route exact path="/comentarios/edit/:id" component={EditComment} />
      </Switch>
    </Router>
  );
};

export default App;
