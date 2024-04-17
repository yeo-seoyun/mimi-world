import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function SubNav({ links }) {
  const navigate = useNavigate();

  return (
    <nav className="py-4 flex items-center justify-start gap-3">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <button
            type="button"
            onClick={() => navigate(link.path, link.options)}
          >
            {link.label}
          </button>
          {index < links.length - 1 && <span>|</span>}
        </React.Fragment>
      ))}
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
