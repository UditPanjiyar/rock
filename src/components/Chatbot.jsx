import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../Styles/Chatbot.css"
import {sample_Question_Ans} from "../utils/sampleQuestionAns"

const genAI = new GoogleGenerativeAI("AIzaSyBr7GG4XfwXAwuMPmW06h9ZTi0DDERgoR4");

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatBotTyping, setIsChatBotTyping] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async (question, sample=false, answer) => {
    setIsChatBotTyping(true);
    const newMessages = [...messages, { sender: 'user', text: input!=''?input:question }];
    setMessages(newMessages);
    setInput('');
    
    let text;
    if(!sample) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      const result = await model.generateContent(input);
      const response = result.response;
      text = response.text();
    }
    else {
        const wait = () => {
          return new Promise((res, rej) => {
            setTimeout(() => {
              res();
            }, 2000);
          })
        }
      
        await wait();
        text = answer;
      }
      
      setMessages([...newMessages, { sender: 'bot', text }]);
      setIsChatBotTyping(false);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h2>Personal Finance Assistance</h2>
          <button onClick={toggleChatbot} className="close-button">X</button>
        </div>
        <div className="chatbot-messages">
          <div className='sample-questions'>
            <p className='mb-2'>Try asking these questions: </p>
            {sample_Question_Ans.map((qAndA) => {
              return (
                <p key={qAndA.que} className='bg-gray-300 mb-2 rounded-md px-[2px] ml-6 cursor-pointer' onClick={() => {
                  // setInput(qAndA.que);
                  handleSend(qAndA.que, true, qAndA.ans);
                }}>{qAndA.que}</p>
              )
            })}
            
          </div>
          {messages.map((message, index) => (
            <div key={index} className={`outer ${message.sender}`}> 
              <div className={`message ${message.sender}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input 
            type="text" 
            value={input} 
            onChange={handleInputChange} 
            placeholder={isChatBotTyping ? "ChatBot is Typing..." : "Type a message..." }
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
      <button onClick={toggleChatbot} className="chatbot-icon">Chat</button>
    </div>
  );
};

export default Chatbot;
