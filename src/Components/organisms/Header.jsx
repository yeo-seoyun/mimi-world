import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full px-12 top-0 z-30 bg-white bg-opacity-70 shadow-default flex justify-between items-center ">
        <ul className="w-full flex gap-8">
          <li>미미월드</li>
          <li>브랜드</li>
          <li>상품</li>
          <li>공지사항</li>
        </ul>
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
