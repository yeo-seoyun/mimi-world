import { Link } from "react-router-dom";

const MoreButton = ({ to, label, className, children }) => {
  return (
    <Link
      to={to}
      aria-label={label}
      className={`bg-[#facfcf] rounded-full text-white py-1 px-2 transition duration-300 hover:bg-[#fca8a8] ${className}`}
    >
      {children}
    </Link>
  );
};

export default MoreButton;
