import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../Pages/ChoosePlayer.css";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import CloseIcon from "@material-ui/icons/Close";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import IconButton from "@material-ui/core/IconButton";
import { blue, orange } from "@material-ui/core/colors";
const ChoosePlayer = () => {
  const [xvalue, setxvalue] = useState("x");

  const handleChange = (e) => {
    setxvalue(e.target.value);
  };
  return (
    <div className="container">
      <h1>Pick your side</h1>
      <div className="styleicon">
        <IconButton>
          <CloseIcon style={{ fontSize: 90, color: blue[500] }} />
        </IconButton>
        <IconButton>
          <RadioButtonUncheckedIcon
            style={{ fontSize: 90, color: orange[500] }}
          />
        </IconButton>
      </div>
      <div className="formstyles">
        <FormControl className="form">
          <RadioGroup
            value={xvalue}
            onChange={handleChange}
            className="radiostyle"
            row
          >
            <div className="radio">
              <FormControlLabel value="x" control={<Radio color="primary" />} />

              <FormControlLabel value="o" control={<Radio color="danger" />} />
            </div>
          </RadioGroup>
        </FormControl>
      </div>

      <Link to="/game">
        <Button
          variant="contained"
          className="btn"
          style={{
            backgroundColor: "#F8F9F8",
            borderRadius: "5px",
            marginTop: "5%",
            textDecorationLine: "none",
          }}
        >
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default ChoosePlayer;
