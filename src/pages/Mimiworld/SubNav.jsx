import { useNavigate } from "react-router-dom";

function SubNav() {
  const navigate = useNavigate();

  return (
    <nav className="py-4 flex items-center justify-start gap-3">
      <button
        type="button"
        onClick={() => {
          navigate("/mimiworld", { replace: true });
        }}
      >
        회사소개
      </button>
      <span>|</span>
      <button
        type="button"
        onClick={() => {
          navigate("/mimiworld/ceomessage");
        }}
      >
        CEO인사말
      </button>
      <span>|</span>
      <button
        type="button"
        onClick={() => {
          navigate("/mimiworld/careers");
        }}
      >
        인재채용
      </button>
    </nav>
  );
}

export default SubNav;
