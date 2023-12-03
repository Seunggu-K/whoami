import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./reset.css";
// import "./index.css";
import "./common.css";
import "./portfolio.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Header from "./component/Header";
import Notfound from "./component/Notfound";

import Home from "./component/Home";
import Introduce from "./component/Introduce";
import Post from "./component/Post";
import Portfolio from "./component/Portfolio";
import PostList from "./component/PostList";
import PortfolioList from "./component/PortfolioList";

// let portfolioID = useState(0);
// let postID = useState(0);

const section = ReactDOM.createRoot(document.getElementById("section"));
section.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />

        <Route path="/portfolio" element={<PortfolioList />}>
          <Route path=":id" element={<Portfolio />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
