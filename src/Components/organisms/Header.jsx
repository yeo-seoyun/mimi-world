import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full px-12 top-0 z-50 bg-white bg-opacity-70 shadow-default flex justify-between items-center ">
        <div className="w-full flex gap-8">
          <div className="group pr-16 inline-block relative">
            <Link to="">미미월드</Link>
            <ul className="absolute w-full py-4 px-2 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>회사소개</li>
              <li>CEO인사말</li>
              <li>인재채용</li>
            </ul>
          </div>

          <div className="group pr-16 inline-block relative">
            <Link to="">브랜드</Link>
            <ul className="absolute w-full py-4 px-2 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>프린세스 미미</li>
              <li>미미프렌즈</li>
              <li>미미펫샵</li>
              <li>쫑알쫑알 똘똘이</li>
              <li>월드카</li>
              <li>월드게임</li>
            </ul>
          </div>

          <div className="group pr-16 inline-block relative">
            <Link to="">상품</Link>
            <ul className="absolute w-full py-4 px-2 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>신상품</li>
              <li>브랜드별</li>
              <li>연령별</li>
            </ul>
          </div>

          <div className="group pr-16 inline-block relative">
            <Link to="">공지사항</Link>
            <ul className="absolute w-full py-4 px-2 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>FAQ</li>
              <li>공지사항</li>
              <li>이벤트</li>
            </ul>
          </div>
        </div>
        <Link
          to="/"
          aria-label="미미월드"
          className="bg-mimi-logo bg-contain bg-no-repeat bg-center w-[120px] h-[60px]"
        ></Link>
        <ul className="w-full flex justify-end gap-1 text-sm">
          <li>로그인</li>
          <li>/</li>
          <li>회원가입</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
