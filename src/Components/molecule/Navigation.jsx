import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navigation({ onCategoryClick }) {
  return (
    <nav className="w-full h-full flex items-center gap-3 ">
      <button
        type="button"
        onClick={onCategoryClick}
        aria-label="카테고리 열기"
        className="hidden sm:block"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="group inline-block h-full sm:hidden">
        <Link
          to="/mimiworld"
          aria-label="미미월드"
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

      <div className="group inline-block h-full sm:hidden">
        <Link
          to="/brand"
          aria-label="브랜드"
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

      <div className="group inline-block h-full sm:hidden">
        <Link
          to="/product"
          aria-label="상품"
          className="relative h-full flex items-center justify-center"
        >
          상품
        </Link>
        <ul className="absolute left-0 w-full py-4 px-12 hidden group-hover:block z-50 bg-white text-sm space-y-3">
          <li>
            <Link to="/product" aria-label="신상품">
              신상품
            </Link>
          </li>
          <li>
            <Link to="/product/brandfilter" aria-label="브랜드별">
              브랜드별
            </Link>
          </li>
          <li>
            <Link to="/product/agefilter" aria-label="연령별">
              연령별
            </Link>
          </li>
        </ul>
      </div>

      <div className="group inline-block h-full sm:hidden">
        <Link
          to="/inform"
          aria-label="공지사항"
          className="relative h-full flex items-center justify-center"
        >
          공지사항
        </Link>
        <ul className="absolute left-0 w-full py-4 px-12 hidden group-hover:block z-50 bg-white text-sm space-y-3">
          <li>
            <Link to="/inform" aria-label="자주 묻는 질문">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/inform/notice" aria-label="공지사항">
              공지사항
            </Link>
          </li>
          <li>
            <Link to="/inform/event" aria-label="이벤트">
              이벤트
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
