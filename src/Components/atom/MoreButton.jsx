// MoreButton.jsx
function MoreButton({ onLoadMore }) {
  return (
    <div className="text-center mt-4">
      <button
        className="text-md bg-pink-100 text-white py-2 px-4 rounded hover:bg-pink-200"
        onClick={onLoadMore}
      >
        더보기
      </button>
    </div>
  );
}

export default MoreButton;
