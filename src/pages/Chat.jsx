// require("dotenv").config();
import React from 'react'
import { Sidebar } from "../components"
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';

const API_KEY = process.env.REACT_APP_API_KEY;

const systemMessage = {
  role: "system",
  content: "Explain things like you're talking to a software professional with 2 years of experience."
}

function Chat() {

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your Partner! Ask me anything!",
      sentTime: "just now",
      sender: "Partner"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "Partner") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "Partner"
          }
        ]);
        setIsTyping(false);
      });
  }

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen">

        {/* Sidebar */}
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">

          {/* Chat Card */}
          <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden">

            {/* Header */}
            <div className="bg-blue-500 text-white px-6 py-4 font-semibold text-lg">
              AI Support Partner
            </div>

            {/* Chat Container */}
            <div style={{ height: "550px" }}>
              <MainContainer>
                <ChatContainer>

                  <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={
                      isTyping
                        ? <TypingIndicator content="Partner is typing..." />
                        : null
                    }
                  >
                    {messages.map((message, i) => {
                      return <Message key={i} model={message} />
                    })}
                  </MessageList>

                  <MessageInput
                    placeholder="Type your message..."
                    onSend={handleSend}
                  />

                </ChatContainer>
              </MainContainer>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Chat;