import Head from "next/head";
import styled from "styled-components";
import { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import MenuIcon from "../components/icons/MenuIcon";

const GridContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${props => (props.collapse ? "70px" : "235px")} 1fr;
  grid-template-rows: 40px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
  height: 100vh;
  .header {
    grid-area: head;
    box-shadow: 0 1px 0 0 #eaedf3;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40px 1fr;
    grid-template-areas:
      "header"
      "main";
  }
`;

const ChatContainer = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  grid-template-rows: 71px 1fr 78px;
  grid-template-areas:
    "search-container chat-title"
    "conversation-list chat-message-list"
    "new-message-container chat-form";
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 71px 1fr 78px;
    grid-template-areas:
      "chat-title"
      "chat-message-list"
      "chat-form";
  }
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
`;
const ChatBody = styled.div`
  height: calc(100vh - 40px);
  display: grid;
  grid-area: main;
  place-items: center center;
`;
const SearchContainer = styled.div`
  display: grid;
  align-items: center;
  grid-area: search-container;
  background: ${props => props.background || "#0048aa"};
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
  z-index: 1;
  padding: 0 20px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
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
  @media only screen and (max-width: 700px) {
    display: none;
  }
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
  @media only screen and (max-width: 700px) {
    display: none;
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
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  overflow-y: scroll;
  .message-row {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 70%;
    img {
      border-radius: 50%;
      grid-row: span 2;
      width: 40px;
      height: 40px;
      margin-right: 1em;
    }
  }
  .message-content {
    display: flex;
  }

  .lead-message {
    justify-items: start;
]
  }
  .user-message {
    justify-content: flex-end;
    .message-content {
      justify-content: flex-end;
    }
  }
  .message-time {
    font-size: 1.3rem;
    color: #777;
    display: flex;
  }
  .user-message .message-time {
    justify-content: flex-end;
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
    border-radius: 50%;
    width: 40px;
    height: 40px;
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
        img: "../static/profiles/ben.png",
        content: "ok then",
        time: "9:05 am"
      },
      {
        id: 2,
        from: "user",
        user: {
          userId: 123,
          userImg: "../static/users/scottie.jpg",
          userName: "Scottie"
        },
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
        user: {
          userId: 123,
          userImg: "../static/users/scottie.jpg",
          userName: "Scottie"
        },
        content: "Right! This is exactly what I needed.",
        time: "3:46 pm"
      },
      {
        id: 2,
        from: "lead",
        img: "../static/profiles/ben.png",
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
const HeaderStyle = styled.div`
  grid-area: header;
  border: 1px solid red;
  display: flex;
  align-items: center;
  z-index: 9;
  .menu {
    display: ${props => (props.open ? "none" : "flex")};
    width: 50px;
    height: 100%;
    align-items: center;
  }
  .workspaces {
    display: grid;
    align-items: center;
    grid-gap: 10px;
    grid-auto-flow: column;
  }

  svg {
    display: block;
  }
  @media only screen and (min-width: 1000px) {
    svg {
      display: none;
    }
  }
`;
const workspaces = [
  {
    id: 1,
    color: "red",
    initial: "W"
  },
  {
    id: 2,
    color: "blue",
    initial: "S"
  },
  {
    id: 3,
    color: "green",
    initial: "B"
  }
];
const StyledWorkspaceBlock = styled.div`
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  color: white;
  border-radius: 5px;
`;

const WorkspaceBlock = ({ workspace: { color, initial } }) => {
  return <StyledWorkspaceBlock color={color}>{initial}</StyledWorkspaceBlock>;
};

const HeaderNav = ({ handleMenuClick, open }) => {
  return (
    <HeaderStyle open={open}>
      <div className="menu" onClick={handleMenuClick}>
        <MenuIcon size={30} />
      </div>
      <div className="workspaces">
        {workspaces.map(workspace => (
          <WorkspaceBlock workspace={workspace} />
        ))}
      </div>
    </HeaderStyle>
  );
};

const Message = ({ message: { content, time, from, user = {}, img } }) => {
  const { userImg, userId, userName } = user;
  return (
    <div
      className={`message-row ${
        from == "user" ? "user-message" : "lead-message"
      }`}
    >
      <div className="message-content">
        {/* {Object.keys(user).length === 0 ? "user pic" : "lead pic"} */}
        {Object.keys(user).length === 0 && <img src={img} />}
        {Object.keys(user).length > 0 && <img src={userImg} />}
        <div class="message-text">{content}</div>
      </div>
      <div class="message-time">
        {Object.keys(user).length > 0 && `${userName} - `}
        {time}
      </div>
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
  const [collapse, setCollapse] = useState(false);
  const collapseMenu = () => {
    setCollapse(p => !collapse);
  };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [lead, setLead] = useState(
    conversations.filter(convo => convo.id == 1)[0]
  );
  const [messages, setMessages] = useState(
    chatMessages.filter(x => x.id == 1)[0].messages
  );
  const handleClick = id => {
    setLead(conversations.filter(convo => convo.id == id)[0]);
    let messageData = chatMessages.filter(x => x.id == id);
    if (messageData.length > 0) {
      const messages = messageData[0].messages;
      setMessages(p => messages);
    } else {
      setMessages([]);
    }
  };
  const handleMenuClick = () => {
    setShowMobileMenu(p => !showMobileMenu);
  };
  return (
    <GridContainer collapse={collapse}>
      <MobileSidebar open={showMobileMenu} handleMenuClick={handleMenuClick} />
      <HeaderNav handleMenuClick={handleMenuClick} open={showMobileMenu} />
      <Sidebar collapseMenu={collapseMenu} collapse={collapse} />
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
            <span>{lead.name}</span> <img src="../static/trash-logo.svg"></img>
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
    </GridContainer>
  );
};

export default Home;
