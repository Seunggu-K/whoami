import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="headerBox">
        <ul>
          <li>
            <Link to="/">
              <img src="" alt="Logo image" />
            </Link>
          </li>
          <li>
            <Link to="/introduce">자기소개</Link>
          </li>
          <li>
            <Link to="/post">포스트</Link>
          </li>
          <li>
            <Link to="/portfolio">포트폴리오</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
