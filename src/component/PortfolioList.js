import Portfolio from "./Portfolio";
import { useState } from "react";

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
  {
    id: 3,
    title: "세 번째 포트폴리오 제목",
    description: "세 번째 포트폴리오 설명",
    needNewPage: true,
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 4,
    title: "세 번째 포트폴리오 제목",
    description: "세 번째 포트폴리오 설명",
    needNewPage: true,
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 5,
    title: "세 번째 포트폴리오 제목",
    description: "세 번째 포트폴리오 설명",
    needNewPage: true,
    regdate: "2023-12-03 20:35:20",
  },
]; // 테스트용 포트폴리오 데이터

/*
const IterationSample = (props) => {
  //   const names = ["눈사람", "얼음", "눈", "바람"];
  //   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const items = props.itemList;
  const itemList =
    items && items.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{itemList}</ul>;
};

export default IterationSample;

*/

const PortfolioList = () => {
  const [portfolioID, setPortfolioID] = useState("");

  const clickPortfolio = (e) => {
    setPortfolioID(e.target.id);
    console.log("portfolioList key 값 : " + e.target.key);
    console.log("portfolioList 포트폴리오 ID : " + portfolioID);
  };

  return (
    <>
      <div id="content">
        <ul className="_portfolioBoxList">
          {data.map((v, idx) => (
            <li
              className="_portfolioBox"
              key={idx}
              id={v.id}
              title={v.title}
              description={v.description}
              needNewPage={v.needNewPage}
              regdate={v.regdate}
              onClick={clickPortfolio}
            >
              {v.title}
            </li>
          ))}
        </ul>
      </div>
      {portfolioID !== "" ? (
        <Portfolio
          props={data.filter((v) => {
            if (v.id === portfolioID) return true;
          })}
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PortfolioList;
