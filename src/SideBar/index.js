import { Component } from "react";
import Popup from "reactjs-popup";
import "./index.css";

class SideBar extends Component {
  state = {
    isAddClicked: false,
    newConversation: "",
    conversationsList: [
      { id: 1, name: "PolandOffice" },
      { id: 2, name: "Introductions" },
      { id: 3, name: "IndiaOffice" },
    ],
  };

  onEnterNewConversation = (event) => {
    this.setState({ newConversation: event.target.value });
  };

  onAddNewConversation = () => {
    this.setState({ isAddClicked: true });
  };

  render() {
    const { conversationsList } = this.state;
    return (
      <div className="side-bar-container">
        <div className="user-details">
          <div className="btn-div">
            <button className="name-btn" type="button">
              R
            </button>
          </div>

          <div className="name-div">
            <h1 className="username">Ronald</h1>
            <p className="user-para">Research Nurse</p>
          </div>
        </div>

        <div className="conversations-card">
          <div className="top-card">
            <h1 className="username">Conversations</h1>
            <Popup
              trigger={
                <button type="button" className="plus-btn">
                  +
                </button>
              }
              position="bottom center"
            >
              {(close) => (
                <div className="conversations-list-popup">
                  <input
                    placeholder="Start New Conversation"
                    className="converse-input"
                    onChange={this.onEnterNewConversation}
                  />
                  <button
                    type="button"
                    className="close-btn"
                    onClick={() => {
                      close();
                    }}
                  >
                    START
                  </button>
                </div>
              )}
            </Popup>
          </div>

          <ul className="conversations-list">
            {conversationsList.map((each) => (
              <li
                key={each.id}
                className={each.id === 2 ? "intro-card" : "list-card"}
              >
                <p className="user-para">#</p>
                <p className="user-para">{each.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
