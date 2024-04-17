import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full h-16 px-12 fixed top-0 z-50 bg-white bg-opacity-70 shadow-default flex justify-between items-center ">
        <nav className="w-full h-full flex items-center gap-3">
          <div className="group inline-block h-full">
            <Link
              to="/mimiworld"
              className="relative h-full flex items-center justify-center"
            >
              미미월드
            </Link>
            <ul className="absolute left-0 w-full py-4 px-12 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>
                <Link to="/mimiworld" aria-label="회사소개">
                  회사소개
                </Link>
              </li>
              <li>
                <Link to="/mimiworld/ceomessage" aria-label="ceo인사말">
                  CEO인사말
                </Link>
              </li>
              <li>
                <Link to="/mimiworld/careers" aria-label="인재채용">
                  인재채용
                </Link>
              </li>
            </ul>
          </div>

          <div className="group inline-block h-full">
            <Link
              to="/brand"
              className="relative h-full flex items-center justify-center"
            >
              브랜드
            </Link>
            <ul className="absolute left-0 w-full py-4 px-12 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>
                <Link to="/brand" aria-label="프린세스 미미">
                  프린세스 미미
                </Link>
              </li>
              <li>
                <Link to="/brand/mimifriends" aria-label="미미프렌즈">
                  미미프렌즈
                </Link>
              </li>
              <li>
                <Link to="/brand/mimipet" aria-label="미미펫샵">
                  미미펫샵
                </Link>
              </li>
              <li>
                <Link to="/brand/ddolddol" aria-label="쫑알쫑알 똘똘이">
                  쫑알쫑알 똘똘이
                </Link>
              </li>
            </ul>
          </div>

          <div className="group inline-block h-full">
            <Link
              to=""
              className="relative h-full flex items-center justify-center"
            >
              상품
            </Link>
            <ul className="absolute left-0 w-full py-4 px-12 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>신상품</li>
              <li>브랜드별</li>
              <li>연령별</li>
            </ul>
          </div>

          <div className="group inline-block h-full">
            <Link
              to=""
              className="relative h-full flex items-center justify-center"
            >
              공지사항
            </Link>
            <ul className="absolute left-0 w-full py-4 px-12 hidden group-hover:block z-50 bg-white text-sm space-y-3">
              <li>FAQ</li>
              <li>공지사항</li>
              <li>이벤트</li>
            </ul>
          </div>
        </nav>
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
