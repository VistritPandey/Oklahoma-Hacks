import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail");
  };

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderRoundedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title" onClick={openMail}>
        {title}
      </h3>
      <div className="emailRow__message" onClick={openMail}>
        <h4>
          {subject} -{" "}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
