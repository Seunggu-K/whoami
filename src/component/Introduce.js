const Introduce = () => {
  return (
    <div id="content">
      <div className="_introduceBox">
        <div className="_introduceBoxPicture">
          <img src={process.env.PUBLIC_URL + "/Sample_Pic_1.PNG"} />
        </div>
        <table className="_introduceTable">
          <tbody>
            <tr>
              <td>이름</td>
              <td>권승구</td>
            </tr>
            <tr>
              <td>학력</td>
              <td>
                잠실고등학교 졸업(2015.02)
                <br />
                강남대학교 졸업(2020.02)
              </td>
            </tr>
            <tr>
              <td>경력</td>
              <td>
                제로바코코리아(2020.05 ~ 2022.08) (RPA 개발자)
                <br />
                투비웨이(2022.08 ~ 2023.11) (RPA 개발자)
              </td>
            </tr>
            <tr>
              <td>Github</td>
              <td>
                <a
                  href="https://github.com/Seunggu-K?tab=repositories"
                  target="_blank"
                >
                  Github 링크
                </a>
              </td>
            </tr>
            <tr>
              <td>교육이력</td>
              <td>파이썬과 오픈소스를 활용한 AI&딥러닝(2020.10 ~ 2020.11)</td>
            </tr>
            <tr>
              <td>자격증</td>
              <td>PCCE 파이썬(2023.10)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="_introduceBox">
        <p>자기 설명</p>
      </div>
      <div className="_introduceBox">
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Introduce;
