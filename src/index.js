import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
// import "./index.css";
import "./css/common.css";
import "./css/portfolio.css";
import "./css/post.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

// let portfolioID = useState(0);
// let postID = useState(0);

const section = ReactDOM.createRoot(document.getElementById("section"));
section.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // <BrowserRouter>
  //   <Routes>
  //     <Route element={<Header />}>
  //       <Route index element={<Home />} />
  //       <Route path="/introduce" element={<Introduce />} />
  //       <Route path="/post" element={<PostList />} />
  //       <Route path="/post/:id" element={<Post />} />

  //       <Route path="/portfolio" element={<PortfolioList />}>
  //         <Route path=":id" element={<Portfolio />} />
  //       </Route>
  //       <Route path="*" element={<Notfound />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
