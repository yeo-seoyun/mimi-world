import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function CategoryModal({ isOpen, toggleModal, handleLinkClick }) {
  const modalRef = useRef();

  useEffect(() => {
    if (modalRef.current) {
      if (isOpen) {
        gsap.to(modalRef.current, {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
        });
      } else {
        gsap.to(modalRef.current, {
          x: "-100%",
          autoAlpha: 0,
          duration: 0.5,
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 bg-white p-4"
        style={{ transform: "translateX(-100%)", opacity: 0 }}
      >
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
    </>
  );
}

export default CategoryModal;
