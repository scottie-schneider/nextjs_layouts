import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";

const ChatContainer = styled.div`
  display: grid;
  grid:
    "search-container chat-title" 71px
    "conversation-list chat-message-list" 1fr
    "new-message-container chat-form" 78px
    / 275px 1fr;
  min-width: 800px;
  max-width: 1000px;
  max-height: 800px;
  width: 100%;
  height: 95vh;
  background: #fff;
  border-radius: 10px;
`;
const ChatBody = styled.div`
  height: 100vh;
  display: grid;
  place-items: center center;
`;
const SearchContainer = styled.div`
  display: grid;
  align-items: center;
  grid-area: search-container;
  background: ${props => props.background || "#0048aa"};
  border-radius: 10px 0 0 0;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
  z-index: 1;
  padding: 0 20px;
  input {
    width: 167px;
    color: #eee;
    outline: none;
    font-weight: bold;
    border-radius: 2px;
    height: 30px;
    border: 0;
    padding-left: 48px;
    padding-right: 20px;
    font-size: 1.4rem;
    background: url("../static/search.svg") no-repeat rgba(255, 255, 255, 0.3);
    background-position: 15px center;
    background-size: 20px 20px;
  }
`;
const ConversationList = styled.div`
  grid-area: conversation-list;
  background: ${props => props.background || "#0048aa"};
  overflow-y: scroll;
`;
const NewMessageContainer = styled.div`
  grid-area: new-message-container;
  display: grid;
  grid: 40px / 40px;
  align-content: center;
  background: ${props => props.background || "#0048aa"};
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0 0 0 10px;
  padding: 0 15px;
  font-size: 3.6rem;
  a {
    background: url("../static/add.svg") no-repeat rgba(255, 255, 255, 0);
    background-position: center center;
    background-size: 40px 40px;
  }
`;
const ChatTitle = styled.div`
  display: grid;
  grid: 36px / 1fr 36px;
  align-content: center;
  align-items: center;
  grid-area: chat-title;
  background: ${props => props.background || "#eee"};
  color: ${props => props.color || "#0048aa"};
  font-weight: bold;
  font-size: 2rem;
  border-radius: 0 10px 0 0;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
  padding: 0 20px;
`;
const ChatMessageList = styled.div`
  grid-area: chat-message-list;
  .message-row {
    margin-bottom: 20px;
  }
  .message-time {
    font-size: 1.3rem;
    color: #777;
  }
  .message-text {
    padding: 9px 14px;
    font-size: 1.6rem;
    margin-bottom: 5px;
  }
  .user-message .message-text {
    background: #0048aa;
    color: #eee;
    border: 1px solid #0048aa;
    border-radius: 14px 14px 0 14px;
  }
  .lead-message .message-text {
    background: #eee;
    color: #111;
    border: 1px solid #ddd;
    border-radius: 14px 14px 14px 0;
  }
`;
const ChatForm = styled.div`
  grid-area: chat-form;
  display: grid;
  grid: 51px / 32px 1fr;
  grid-gap: 15px;
  align-items: center;
  align-content: center;
  background: ${props => props.background || "#eee"};
  border-radius: 0 0 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  padding-left: 42px;
  padding-right: 22px;
  img {
    cursor: pointer;
  }
  input {
    outline: none;
    padding: 15px;
    border: 2px solid #ddd;
    color: #330;
    border-radius: 6px;
    font-size: 1.4rem;
  }
`;
const ConversationSnippet = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  cursor: pointer;
  color: #ddd;
  font-size: 1.3rem;
  border-bottom: 1px solid #002c88;
  padding: 20px 20px 20px 15px;
  .active,
  :hover {
    background: #002c88;
  }
  img {
    height: 40px;
    border-radius: 100%;
  }
  .title-text {
    font-weight: bold;
    color: #eee;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .created-date {
    color: #ddd;
    white-space: nowrap;
    font-size: 1rem;
  }
  .lead-details {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-gap: 15px;
    align-items: center;
  }
  .conversation-message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const chatMessages = [
  {
    id: 1,
    messages: [
      {
        id: 1,
        from: "lead",
        content: "ok then",
        time: "9:05 am"
      },
      {
        id: 2,
        from: "user",
        content:
          "Yeah I think it's best we do that. Otherwise things won't work well at all. I'm adding more text here to test the sizing of the speech bubble and the wrapping of it too.",
        time: "10:01am"
      }
    ]
  },
  {
    id: 2,
    messages: [
      {
        id: 1,
        from: "user",
        content: "Right! This is exactly what I needed.",
        time: "3:46 pm"
      },
      {
        id: 2,
        from: "lead",
        content: "For sure, happy to help",
        time: "10:01am"
      }
    ]
  }
];
const conversations = [
  {
    id: 1,
    img: "../static/profiles/ben.png",
    date: "3 minutes ago",
    name: "Al E Gater",
    message: "This is a rather long message, that should (not) overflow."
  },
  {
    id: 2,
    img: "../static/profiles/daryl.png",
    date: "1 hour ago",
    name: "Holly Wood",
    message: "Very funny"
  },
  {
    id: 3,
    img: "../static/profiles/douglas.png",
    date: "Apr 16 9:04pm",
    name: "Ben Dover",
    message: "Yes I love how Python does that."
  },
  {
    id: 4,
    img: "../static/profiles/jacob.png",
    date: "Apr 16 9:04pm",
    name: "Anita Room",
    message: "Yeah Miami Heat are done"
  },
  {
    id: 5,
    img: "../static/profiles/john.jpeg",
    date: "Apr 16 9:04pm",
    name: "Jack Pott",
    message: "No it does not"
  },
  {
    id: 6,
    img: "../static/profiles/kim.jpeg",
    date: "Apr 16 9:04pm",
    name: "Kay Oss",
    message: "This is a rather long message, that should (not) overflow."
  },
  {
    id: 7,
    img: "../static/profiles/sarah.jpeg",
    date: "Apr 16 9:04pm",
    name: "Bennie Factor",
    message: "This is a rather long message, that should (not) overflow."
  },
  {
    id: 8,
    img: "../static/profiles/stacey.jpeg",
    date: "Apr 16 9:04pm",
    name: "Ima Hogg",
    message: "This is a rather long message, that should (not) overflow."
  },
  {
    id: 9,
    img: "../static/profiles/stan.jpeg",
    date: "Apr 16 9:04pm",
    name: "Joe King",
    message: "This is a rather long message, that should (not) overflow."
  }
];

const Message = ({ message: { content, time, from } }) => {
  return (
    <div
      className={`message-row ${
        from == "user" ? "user-message" : "lead-message"
      }`}
    >
      <div class="message-text">{content}</div>
      <div class="message-time">{time}</div>
    </div>
  );
};
const Conversation = ({
  conversation: { id, img, date, name, message },
  handleClick
}) => {
  return (
    <ConversationSnippet onClick={() => handleClick(id)}>
      <div className="lead-details">
        <img src={img} />
        <div className="created-date">{date}</div>
      </div>
      <div className="title-text">{name}</div>
      <div className="conversation-message">{message}</div>
    </ConversationSnippet>
  );
};
const Home = () => {
  const [lead, setLead] = useState(1);
  const [messages, setMessages] = useState(
    chatMessages.filter(x => x.id == 1)[0].messages
  );
  const handleClick = id => {
    setLead(id);
    let messageData = chatMessages.filter(x => x.id == id);
    if (messageData.length > 0) {
      const messages = messageData[0].messages;
      setMessages(p => messages);
    } else {
      setMessages([]);
    }
  };
  return (
    <ChatBody>
      <ChatContainer>
        <Head>
          <title>Chat App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SearchContainer>
          <input type="text" placeholder="search" />
        </SearchContainer>
        <ConversationList>
          {conversations.map(conversation => (
            <Conversation
              id={conversation.id}
              conversation={conversation}
              handleClick={handleClick}
            />
          ))}
        </ConversationList>
        <NewMessageContainer>
          <a href="#"></a>
        </NewMessageContainer>
        <ChatTitle>
          <span>Scottie Schneider</span>{" "}
          <img src="../static/trash-logo.svg"></img>
        </ChatTitle>
        <ChatMessageList>
          {messages !== [] &&
            messages.map(message => <Message message={message} />)}
          {messages.length == 0 && <p>No messages. How about sending one?</p>}
        </ChatMessageList>
        <ChatForm>
          <img src="../static/attachment-logo.svg"></img>
          <input type="text" placeholder="type a message" />
        </ChatForm>
      </ChatContainer>
    </ChatBody>
  );
};

export default Home;
