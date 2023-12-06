// import logo from "./logo.svg";
import "./css/App.css";

// import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./component/Header";
import Notfound from "./component/Notfound";

import Home from "./component/Home";
import Introduce from "./component/Introduce";
import Post from "./component/Post";
import Portfolio from "./component/Portfolio";
import PostList from "./component/PostList";
import PortfolioList from "./component/PortfolioList";

function App() {
  // const { admin, setAdmin } = useState("");

  // const adminLogin = () => {
  //   console.log({ admin });
  //   setAdmin("ksg8927");
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/posts/:id" element={<PostList />} />
          <Route path="/post/:id" element={<Post />} />

          <Route path="/portfolio" element={<PortfolioList />}>
            <Route path=":id" element={<Portfolio />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
