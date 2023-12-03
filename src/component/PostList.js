import { Link } from "react-router-dom";

const PostList = () => {
  return (
    <>
      <div id="content">
        <div>포스트 기능 개발 중</div>
        <div>
          <Link to="/post/1">포스트 1번</Link>
        </div>
      </div>
    </>
  );
};

export default PostList;
