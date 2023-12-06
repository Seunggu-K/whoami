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
  {
    id: 7,
    title: "게시글",
    parentNode: 1,
    category: "P",
    content: "게시글",
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 8,
    title: "게시글",
    parentNode: 1,
    category: "P",
    content: "게시글",
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 9,
    title: "게시글",
    parentNode: 1,
    category: "P",
    content: "게시글",
    regdate: "2023-12-03 20:35:20",
  },
  {
    id: 10,
    title: "게시글",
    parentNode: 1,
    category: "P",
    content: "게시글",
    regdate: "2023-12-03 20:35:20",
  },
]; // 테스트용 데이터

const PostList = () => {
  // const [postID, setPostID] = useState(1);

  const params = useParams().id;
  const postID = Number(params);

  let targetData;
  let prevCategories = [];
  let prevPostID = postID;

  do {
    targetData = data.find((v) => {
      if (v.id === prevPostID) return true;
    });

    if (targetData.id === 1) {
      break;
    }

    prevCategories.splice(0, 0, [
      "/posts/" + targetData.parentNode,
      targetData.title,
    ]);

    prevPostID = targetData.parentNode;
  } while (targetData.parentNode !== 0);

  let dataTemp = data.filter((v) => {
    if (v.parentNode === postID) return true;
  });

  const arrPost = dataTemp.map((v, idx) => (
    <Link to={"/post" + (v.category === "P" ? "" : "s") + "/" + v.id} key={idx}>
      <li className="_postBox" key={idx}>
        <div className="_postBoxDiv">
          <div className="_postDivision">
            {v.category === "P" ? "게시글" : "폴더"}
          </div>
          <div className="_postTitle">{v.title}</div>
          <div className="_postRegDate">{v.regdate}</div>
        </div>
      </li>
    </Link>
  ));

  return (
    <>
      <div id="content">
        <div className="_postTitleBox">포스트</div>
        <div className="_postContentBox">
          <div className="_postPath">
            <b>
              {prevCategories.map((v) => (
                <>
                  <Link to={v[0]}>{v[1]}</Link>
                  <b>{" > "}</b>
                </>
              ))}
            </b>
          </div>
          {arrPost.length === 0 ? (
            <div>하위 카테고리/게시글이 존재하지 않습니다.</div>
          ) : (
            <ul className="_postBoxList">{arrPost}</ul>
          )}
        </div>
      </div>
    </>
  );
};

export default PostList;
