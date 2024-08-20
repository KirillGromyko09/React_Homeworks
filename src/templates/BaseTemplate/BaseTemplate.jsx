import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const BaseTemplate = ({ title = null, className = null, children }) => {
  const baseCn = cn({
    [className]: className,
  });

  return (
    <div className={baseCn}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

BaseTemplate.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default BaseTemplate;
