import React from "react";
import PostList from "./PostList";
import { BrowserRouter, Route } from "react-router-dom";
import BlogCreate from "./Pages/BlogCreate";
import BlogDelete from "./Pages/BlogDelete";
import BlogEdit from "./Pages/BlogEdit";
import BlogRead from "./Pages/BlogRead";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={PostList} />
          <Route path="/blogs/create" exact component={BlogCreate} />
          <Route path="/blogs/delete" exact component={BlogDelete} />
          <Route path="/blogs/Edit" exact component={BlogEdit} />
          <Route path="/blogs/read" exact component={BlogRead} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
