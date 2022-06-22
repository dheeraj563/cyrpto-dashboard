import React from 'react'
import PropTypes from "prop-types";
import cx from "classnames";

import "./text.m.css";


const Text = ({ text, bold, handleClick }) => {
  return (
    <div
      className={cx("textWrapper", {
      textBold: bold
    })}
    onClick={handleClick}
    >{text}</div>
  )
}

Text.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func
}

Text.defaultProps = {
    text: "",
    handleClick: () => {}
}

export default Text;