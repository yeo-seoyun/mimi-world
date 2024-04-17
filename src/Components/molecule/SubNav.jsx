import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function SubNav({ links }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="py-4 flex items-center justify-start gap-3">
      {links.map((link, index) => {
        const isActive = location.pathname === link.path;
        const buttonClasses = isActive
          ? "bg-pink-100 text-white"
          : "text-gray-700";

        return (
          <React.Fragment key={index}>
            <button
              type="button"
              onClick={() => navigate(link.path, link.options)}
              className={`${buttonClasses} px-3 py-1 rounded`}
            >
              {link.label}
            </button>
            {index < links.length - 1 && (
              <span className="text-gray-500">|</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

SubNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      options: PropTypes.object,
    })
  ).isRequired,
};

export default SubNav;
