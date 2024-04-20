import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchInput({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex items-center justify-end sm:w-[90%]"
    >
      <input
        type="search"
        value={value}
        onChange={onChange}
        id="search"
        placeholder="검색어를 입력하세요"
        className="w-1/2 sm:w-full p-2 border text-sm"
      />
      <button type="submit" className="px-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchInput;
