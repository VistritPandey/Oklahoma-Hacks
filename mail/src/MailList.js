import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./MailList.css";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import RedoRoundedIcon from "@material-ui/icons/RedoRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import KeyboardHideRoundedIcon from "@material-ui/icons/KeyboardHideRounded";
import Section from "./Section";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

const MailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className="mailList__sections">
        <Section
          Icon={InboxRoundedIcon}
          title="Important"
          color="red"
          selected
        />
        <Section Icon={PeopleRoundedIcon} title="Social" color="#1A73E8" />
      </div>
      <div className="mailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default MailList;
