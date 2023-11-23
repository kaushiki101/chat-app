import "./style.css";
import { useEffect, useState } from "react";

export type ChatObject = {
  id: string;
  message: string;
  sender: {
    self: boolean;
  };
};

export default function MessageContainer() {
  const [messageList, setMessageList] = useState<ChatObject[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    fetch("https://qa.corider.in/assignment/chat?page=" + currentPage)
      .then((r) => r.json())
      .then((data) =>
        setMessageList((currentValue) => {
          return [...data.chats, ...currentValue];
        })
      );
  }, [currentPage]);

  const handleScroll = (event: any) => {
    if (event.target.scrollTop === 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="MessageContainer" onScroll={handleScroll}>
      {messageList.map((message) =>
        message.sender.self ? (
          <div key={message.id} className="chat-bubble sender">
            {message.message}
          </div>
        ) : (
          <div className="chat-bubble-container">
            <img src="./user-1.png" alt="user" />
            <div key={message.id} className="chat-bubble received">
              {message.message}
            </div>
          </div>
        )
      )}
    </div>
  );
}
