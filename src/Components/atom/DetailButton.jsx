import { Link } from "react-router-dom";

const DetailButton = ({ to, label, className, children }) => {
  return (
    <Link
      to={to}
      aria-label={label}
      className={`bg-pink-100 rounded-full text-white py-1 px-2 transition duration-300 hover:bg-pink-200 ${className}`}
    >
      {children}
    </Link>
  );
};

export default DetailButton;
