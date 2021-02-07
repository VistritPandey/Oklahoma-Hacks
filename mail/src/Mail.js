import { IconButton } from "@material-ui/core";
import React from "react";
import "./Mail.css";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import MoveToInboxRoundedIcon from "@material-ui/icons/MoveToInboxRounded";
import ErrorRoundedIcon from "@material-ui/icons/ErrorRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackRoundedIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxRoundedIcon />
          </IconButton>
          <IconButton>
            <ErrorRoundedIcon />
          </IconButton>
          <IconButton>
            <DeleteRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantRoundedIcon className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
