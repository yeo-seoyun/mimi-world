import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLinkClick = (e) => {
    toggleModal();
  };

  return (
    <>
      <header className="w-full h-16 px-12 sm:px-4 fixed top-0 z-50 bg-white bg-opacity-70 shadow-default flex justify-between items-center ">
        <nav className="w-full h-full flex items-center gap-3 ">
          <button
            type="button"
            onClick={toggleModal}
            className="hidden sm:block"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="group inline-block h-full sm:hidden">
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

          <div className="group inline-block h-full sm:hidden">
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

          <div className="group inline-block h-full sm:hidden">
            <Link
              to="/product"
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

        <ul className="w-full flex justify-end gap-1 text-sm sm:hidden">
          <li>
            <Link>로그인</Link>
          </li>
          <li>/</li>
          <li>
            <Link>회원가입</Link>
          </li>
        </ul>

        <div className="w-full text-end hidden sm:block">
          <button type="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </header>

      {showModal && (
        <div className="fixed w-full h-screen z-50 duration-300">
          <div className="absolute top-0 w-full h-full flex flex-col bg-white p-4  space-y-2">
            <div className="w-full flex justify-end">
              <button onClick={toggleModal} className="p-2 text-2xl">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 text-xl">
                <h2>미미월드</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link to="/mimiworld" onClick={handleLinkClick}>
                      미미월드
                    </Link>
                  </li>
                  <li>
                    <Link to="/mimiworld/ceomessage" onClick={handleLinkClick}>
                      CEO 인사말
                    </Link>
                  </li>
                  <li>
                    <Link to="/mimiworld/careers" onClick={handleLinkClick}>
                      인재채용
                    </Link>
                  </li>
                </ul>
                <h2>브랜드</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link to="/brand" onClick={handleLinkClick}>
                      프린세스 미미
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand/mimifriends" onClick={handleLinkClick}>
                      미미프렌즈
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand/mimipet" onClick={handleLinkClick}>
                      미미펫샵
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand/ddolddol" onClick={handleLinkClick}>
                      쫑알쫑알 똘똘이
                    </Link>
                  </li>
                </ul>
                <h2>상품</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link to="/product" onClick={handleLinkClick}>
                      신상품
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand/mimifriends" onClick={handleLinkClick}>
                      브랜드별
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand/mimipet" onClick={handleLinkClick}>
                      연령별
                    </Link>
                  </li>
                </ul>
                <h2>공지사항</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link to="/product" onClick={handleLinkClick}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand/mimifriends" onClick={handleLinkClick}>
                      공지사항
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand/mimipet" onClick={handleLinkClick}>
                      이벤트
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex gap-1 text-sm">
                <Link>로그인</Link>
                <span>/</span>
                <Link>회원가입</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
