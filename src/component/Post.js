import { useParams } from "react-router-dom";

let data = [
  {
    id: 1,
    title: "root",
    parentNode: 0,
    category: "C",
    content: null,
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 2,
    title: "첫 번째 카테고리",
    parentNode: 1,
    category: "C",
    content: null,
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 3,
    title: "첫 번째 게시글",
    parentNode: 1,
    category: "P",
    content: "첫 번째 게시글의 내용입니다.",
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 4,
    title: "두 번째 카테고리",
    parentNode: 2,
    category: "C",
    content: null,
    regdate: "2023-12-03 20:35:20",
  },
]; // 테스트용 데이터

const Post = () => {
  const { id } = useParams();
  console.log("포스트 ID : " + { id });
  console.log(data);
  return (
    <>
      <div id="content">
        <div>포스트 화면 개발 중</div>
        <div>id : {id}</div>
      </div>
    </>
  );
};

export default Post;
