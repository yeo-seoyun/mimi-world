import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function SearchModal({
  isOpen,
  toggleSearchModal,
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}) {
  const searchModalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(searchModalRef.current, { x: 0, duration: 0.5 });
    } else if (searchModalRef.current) {
      gsap.to(searchModalRef.current, { x: "100%", duration: 0.5 });
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div ref={searchModalRef} className="fixed inset-0 z-50 bg-white p-4">
          <div className="flex justify-between items-center">
            <form
              onSubmit={onSearchSubmit}
              className="flex-grow flex items-center"
            >
              <button type="submit" className="p-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                type="text"
                value={searchTerm}
                onChange={onSearchChange}
                placeholder="검색어를 입력하세요"
                className="w-full p-2 border"
              />
            </form>
            <button
              onClick={toggleSearchModal}
              className="p-2"
              aria-label="검색 닫기"
            >
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchModal;
