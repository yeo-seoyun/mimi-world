import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const [showSearchModal, setShowSearchModal] = useState(false);
  const searchModalRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleModal = () => {
    if (showModal) {
      gsap.to(modalRef.current, {
        x: "-100%",
        duration: 0.5,
        onComplete: () => setShowModal(false),
      });
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (showModal) {
      gsap.fromTo(modalRef.current, { x: "-100%" }, { x: 0, duration: 0.5 });
    }
  }, [showModal]);

  const handleLinkClick = (e) => {
    toggleModal();
  };

  const toggleSearchModal = () => {
    if (showSearchModal) {
      gsap.to(searchModalRef.current, {
        x: "100%",
        duration: 0.5,
        onComplete: () => setShowSearchModal(false),
      });
    } else {
      setShowSearchModal(true);
    }
  };

  useEffect(() => {
    if (showSearchModal) {
      gsap.fromTo(
        searchModalRef.current,
        { x: "100%" },
        { x: 0, duration: 0.5 }
      );
    }
  }, [showSearchModal]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      toggleSearchModal();
    }
  };

  return (
    <>
      <header className="w-full h-16 px-12 sm:px-4 fixed top-0 z-50 bg-white bg-opacity-70 shadow-default flex justify-between items-center ">
        <nav className="w-full h-full flex items-center gap-3 ">
          <button
            type="button"
            onClick={toggleModal}
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

        <Link
          to="/"
          aria-label="미미월드"
          className="bg-mimi-logo bg-contain bg-no-repeat bg-center w-[120px] h-[60px]"
        ></Link>

        <ul className="w-full flex justify-end gap-1 text-sm sm:hidden">
          <li>
            <Link to="" aria-label="로그인">
              로그인
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="" aria-label="회원가입">
              회원가입
            </Link>
          </li>
        </ul>

        {/* 모바일 뷰에서만 보이기 */}
        <div className="w-full text-end hidden sm:block">
          <button type="button" onClick={toggleSearchModal} aria-label="검색">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </header>

      {showModal && (
        <div ref={modalRef} className="fixed w-full h-screen z-50">
          <div className="absolute top-0 w-full h-full flex flex-col bg-white p-4  space-y-2">
            <div className="w-full flex justify-end">
              <button
                onClick={toggleModal}
                className="p-2 text-2xl"
                aria-label="카테고리 닫기"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 text-xl">
                <h2>미미월드</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link
                      to="/mimiworld"
                      aria-label="미미월드"
                      onClick={handleLinkClick}
                    >
                      미미월드
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mimiworld/ceomessage"
                      aria-label="CEO인사말"
                      onClick={handleLinkClick}
                    >
                      CEO 인사말
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mimiworld/careers"
                      aria-label="인재채용"
                      onClick={handleLinkClick}
                    >
                      인재채용
                    </Link>
                  </li>
                </ul>
                <h2>브랜드</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link
                      to="/brand"
                      aria-label="프린세스 미미"
                      onClick={handleLinkClick}
                    >
                      프린세스 미미
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brand/mimifriends"
                      aria-label="미미프렌즈"
                      onClick={handleLinkClick}
                    >
                      미미프렌즈
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brand/mimipet"
                      aria-label="미미펫샵"
                      onClick={handleLinkClick}
                    >
                      미미펫샵
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brand/ddolddol"
                      aria-label="쫑알쫑알 똘똘이"
                      onClick={handleLinkClick}
                    >
                      쫑알쫑알 똘똘이
                    </Link>
                  </li>
                </ul>
                <h2>상품</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link
                      to="/product"
                      aria-label="신상품"
                      onClick={handleLinkClick}
                    >
                      신상품
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/brandfilter"
                      aria-label="브랜드별"
                      onClick={handleLinkClick}
                    >
                      브랜드별
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/agefilter"
                      aria-label="연령별"
                      onClick={handleLinkClick}
                    >
                      연령별
                    </Link>
                  </li>
                </ul>
                <h2>공지사항</h2>
                <ul className="text-base text-gray-100 pl-2">
                  <li>
                    <Link
                      to="/inform"
                      aria-label="자주 묻는 질문"
                      onClick={handleLinkClick}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/inform/notice"
                      aria-label="공지사항"
                      onClick={handleLinkClick}
                    >
                      공지사항
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/inform/event"
                      aria-label="이벤트"
                      onClick={handleLinkClick}
                    >
                      이벤트
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex gap-1 text-sm">
                <Link to="" aria-label="로그인">
                  로그인
                </Link>
                <span>/</span>
                <Link to="" aria-label="회원가입">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 검색 모달 */}
      {showSearchModal && (
        <div ref={searchModalRef} className="fixed inset-0 z-50 bg-white p-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <button type="submit" className="p-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="검색어를 입력하세요"
              className="w-full p-2 border"
            />

            <button
              onClick={toggleSearchModal}
              className="p-2"
              aria-label="검색 닫기"
            >
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Header;
