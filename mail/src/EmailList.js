import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import EmailRow from "./EmailRow";
import { db } from "./Firebase";

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
        <div className="emailList__settingsRight"></div>
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
