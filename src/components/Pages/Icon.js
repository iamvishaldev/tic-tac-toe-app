import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import CloseIcon from "@material-ui/icons/Close";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import "./Icon.css";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <CloseIcon className="iconscircle" style={{ fontSize: 90 }} />;
    case "cross":
      return (
        <RadioButtonUncheckedIcon
          className="iconscross"
          style={{ fontSize: 90 }}
        />
      );
    default:
      return <FaPen className="icons" />;
  }
};

export default Icon;
