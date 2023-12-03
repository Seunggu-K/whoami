import { Link, Outlet } from "react-router-dom";

const PortfolioList = () => {
  return (
    <>
      <div id="content">
        <div>포트폴리오 기능 개발 중</div>
        <div>
          <Link to="/portfolio/1">포트폴리오 1번</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default PortfolioList;
