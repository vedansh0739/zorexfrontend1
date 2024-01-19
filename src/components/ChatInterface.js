import React, { useState } from "react";
import "../App.css";
import "./style1.css";
import FileUpload from "./FileUpload";
const ChatInterface = ({ onFilesSelected}) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleFileUpload = (event) => {
    const files = event.target.files;
    // 'files' is a FileList object that contains all the selected files.
    // You can iterate over this list to process or upload files.
};
  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      style={{
        flex: 1,
        height: "99vh",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      {/* Message display area */}
      <div
        style={{
          flex: 1, // This will take up all available space
          padding: "10px",
          border: "0px solid grey",
          margin: "10px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          overflowY: "auto",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ margin: "5px 0" }}>
            {message}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          border: "0px solid grey",
          margin: "10px",
          borderRadius: "10px",
          height: "25px", // Fixed height for the input area
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: 'white' 
        }}
      >
        <input
          className="a2"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{flex:1, marginRight: "10px" }}
        />
        <button className="smallbutton" onClick={sendMessage}>
          Search
        </button>
        {/*<FileUpload onFilesSelected= { onFilesSelected } />*/}
      </div>
    </div>
  );
};

export default ChatInterface;
