import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchModal from "../molecule/SearchModal";
import CategoryModal from "../molecule/CategoryModal";
import Navigation from "../molecule/Navigation";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const toggleSearchModal = () => {
    setShowSearchModal((prevState) => !prevState);
  };

  const handleLinkClick = (e) => {
    toggleModal();
  };

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
        <Navigation onCategoryClick={toggleModal} />
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

        <div className="w-full text-end hidden sm:block">
          <button type="button" onClick={toggleSearchModal} aria-label="검색">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </header>

      {showModal && (
        <CategoryModal
          isOpen={showModal}
          toggleModal={toggleModal}
          handleLinkClick={handleLinkClick}
        />
      )}

      <SearchModal
        isOpen={showSearchModal}
        toggleSearchModal={toggleSearchModal}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
    </>
  );
}

export default Header;
