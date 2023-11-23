import React from "react";
import "./App.css";
import MessageContainer from "./component/MessageContainer";
import MessageHeader from "./component/MessageHeader";
import MessageFooter from "./component/MessageFooter";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MessageHeader />
      <MessageContainer />
      <MessageFooter />
    </div>
  );
}

export default App;
