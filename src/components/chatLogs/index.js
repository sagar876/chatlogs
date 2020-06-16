import React, { Component } from "react";
import { connect } from "react-redux";
import * as chatActions from "../../actions/index";
import Message from "./textBox";

class ChatLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessages: []
    };
  }

  componentDidMount() {
    this.props.getChatMessages();
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setUserMessages(nextProps);
    }
  }

  setUserMessages = data => {
    const { chatMessages, users } = data;
    const userMessages = [];
    users.forEach(user => {
      chatMessages.forEach(msg => {
        if (user.id === msg.userId) {
          userMessages.push({
            messageId: msg.id,
            userId: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            timestamp: msg.timestamp,
            date: this.getFormattedDate(msg.timestamp),
            email: user.email,
            message: msg.message,
            avatar: user.avatar
          });
        }
      });
    });
    this.setState({
      userMessages: userMessages.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      )
    });
  };

  getFormattedDate = d => {
    const date = new Date(d);
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 101).toString().slice(-2);
    const dd = (date.getDate() + 100).toString().slice(-2);
    return `${date.getHours()}:${date.getMinutes()} - ${dd}/${mm}/${yyyy}`;
  };

  render() {
    const { userMessages } = this.state;
    return (
      <div className="chatlogs-container">
        {userMessages.map(item => {
          return <Message data={item} key={item.messageId} />;
        })}
      </div>
    );
  }
}

// Container components can be also used to wrap the presentational components,
const mapStateToProps = state => {
  return {
    chatMessages: state.chatMessages,
    users: state.users
  };
};

const mapDispachToProps = dispatch => {
  return {
    getChatMessages: () => dispatch(chatActions.getChatMessages()),
    getUsers: () => dispatch(chatActions.getUsers())
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(ChatLogs);
