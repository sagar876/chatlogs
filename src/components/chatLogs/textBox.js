import React from "react";

const Message = props => {
  const { avatar, date, message, email, fullName } = props.data;
  return (
    <div className="chatbox">
      <div className="chat-img">
        {avatar ? (
          <img src={avatar} alt="avatar" />
        ) : (
          <img
            src="http://dummyimage.com/100x100.png/dddddd/000000"
            alt="avatar"
          />
        )}
        <span className="email tooltiptext">{email}</span>
      </div>
      <div className="chat-details">
        <span className="time-right">{date}</span>
        <p className="full-name">{fullName}</p>
        <p className="message">{message}</p>
      </div>
    </div>
  );
};
export default Message;
