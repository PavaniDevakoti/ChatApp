import ChatPage from "./ChatPage";
import SideBar from "./SideBar";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <SideBar />
      <ChatPage />
    </div>
  );
};

export default App;
