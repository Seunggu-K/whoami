import { Link, useParams } from "react-router-dom";

const data = [
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
  {
    id: 5,
    title: "두 번째 카테고리",
    parentNode: 2,
    category: "C",
    content: null,
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 6,
    title: "게시글",
    parentNode: 4,
    category: "P",
    content: "게시글",
    regdate: "2023-12-03 20:35:20",
  },
]; // 테스트용 데이터

const Post = () => {
  const params = useParams().id;
  const postID = Number(params);
  // console.log("포스트 ID : " + postID);
  // console.log(data);

  const targetData = data.find((v) => {
    if (v.id === postID) return true;
  });

  return (
    <>
      <div id="content">
        <div>포스트 화면 개발 중</div>
        <div>
          <Link to={"/posts/" + targetData.parentNode}>
            상위 카테고리로 이동
          </Link>
        </div>
        <div>id : {postID}</div>
        <div>title : {targetData.title}</div>
        <div>parentNode : {targetData.parentNode}</div>
        <div>category : {targetData.category}</div>
        <div>content : {targetData.content}</div>
        <div>regdate : {targetData.regdate}</div>
      </div>
    </>
  );
};

export default Post;
