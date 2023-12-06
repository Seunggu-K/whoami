import { useParams } from "react-router-dom";

let data = [
  {
    id: 1,
    title: "첫 번째 포트폴리오 제목",
    description: "첫 번째 포트폴리오 설명",
    needNewPage: false,
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 2,
    title: "두 번째 포트폴리오 제목",
    description: "두 번째 포트폴리오 설명",
    needNewPage: true,
    regdate: "2023-12-03 20:35:20",
  },
]; // 테스트용 포트폴리오 데이터

const Portfolio = (props) => {
  console.log("Portfolio 내부 Props : " + props);
  const { id } = props[0];
  console.log("Portfolio 내부 포트폴리오 ID : " + { id });
  return (
    <>
      <div id="portfolioAlert">
        <div>포트폴리오 화면 개발 중</div>
        <div>id : {id}</div>
      </div>
    </>
  );
};

export default Portfolio;
