import { Component } from "react";
import Popup from "reactjs-popup";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

import { AiOutlineSend, AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsEmojiSmile, BsKeyboard } from "react-icons/bs";

import "./index.css";
import { CustomButton } from "./styledComponents";

const usersList = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const colorsList = ["red", "green", "blue", "#ce3adf", "aqua"];

class ChatPage extends Component {
  state = {
    messagesList: [
      {
        id: "a",
        message:
          "Welcome to Team Chat..! Send a message now to start conversation with other users",
        userName: "PubNub",
        color: "coral",
        time: "12:36",
        counter: "0",
      },
    ],
    message: "",
    countList: [],
    counter: 0,
    isSmileClicked: false,
  };

  onEnteringMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  sendMessage = () => {
    const { message, messagesList } = this.state;
    const index = Math.floor(Math.random() * 5);
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes();

    const messageDetails = {
      id: messagesList.length,
      message,
      userName: usersList[index],
      color: colorsList[index],
      time,
      counter: 0,
    };
    this.setState((prevState) => ({
      messagesList: [...prevState.messagesList, messageDetails],
      message: "",
      isSmileClicked: false,
    }));
  };

  onClickLike = (id) => {
    const counterDetails = { id, counter: 1 };
    this.setState((prevState) => ({
      countList: [...prevState.countList, counterDetails],
    }));
  };

  openEmojisList = () => {
    this.setState({ isSmileClicked: true });
  };

  onEmojiSelect = (event) => {
    this.setState((prevState) => ({
      message: prevState.message + event.native,
    }));
    console.log(event.native);
  };

  renderUserSuggestion = () => {
    return (
      <div>
        <ul>
          {usersList.map((each) => (
            <li key={each}>{each}</li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { messagesList, message, countList, isSmileClicked } = this.state;
    return (
      <div className="chat-container">
        <div className="header-card">
          <div>
            <h1 className="username">Introductions</h1>
            <p className="user-para">
              This Channel Is For Company Wide Chatter
            </p>
          </div>
          <div className="user-card">
            <p className="user-para">3 | 100</p>
            <Popup
              trigger={
                <button type="button" className="trigger">
                  <FiUsers className="trigger-button" />
                </button>
              }
              position="bottom right"
            >
              {(close) => (
                <div className="users-list-popup">
                  <ol>
                    {usersList.map((each) => (
                      <li key={each} className="users-list">
                        <p className="user-para">{each}</p>
                      </li>
                    ))}
                  </ol>
                  <button
                    type="button"
                    className="close-btn"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <hr />

        <div className="chat-page">
          <ul className="messages-list">
            {messagesList.map((each) => (
              <li key={each.id} className="total-card">
                <CustomButton type="button" color={each.color}>
                  {each.userName[0]}
                </CustomButton>
                <div className="message-container">
                  <div className="name-card">
                    <p className="username">{each.userName}</p>
                    <p className="time">{each.time}</p>
                  </div>

                  <div className="message-card">
                    <p className="message">{each.message}</p>

                    <AiOutlineLike
                      className="like-button"
                      onClick={() => this.onClickLike(each.id)}
                    />

                    <p className="like-counter">
                      {countList.filter((num) => num.id === each.id).length}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="emojis-container">
            {isSmileClicked && (
              <Picker
                theme="dark"
                data={data}
                previewPosition="bottom"
                onEmojiSelect={this.onEmojiSelect}
              />
            )}
          </div>
        </div>

        <div className="msg-input-card">
          <input
            type="text"
            placeholder="Type Message"
            className="msg-input"
            onChange={this.onEnteringMessage}
            value={message}
          />
          <div className="input-btn-card">
            <button
              type="button"
              className="smile-btn"
              onClick={this.openEmojisList}
            >
              {isSmileClicked ? <BsKeyboard /> : <BsEmojiSmile />}
            </button>

            <button
              type="button"
              onClick={this.sendMessage}
              className="send-btn"
            >
              <AiOutlineSend />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatPage;
