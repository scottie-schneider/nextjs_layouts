import Head from "next/head";
import styled from "styled-components";

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

const Home = () => (
  <ChatBody>
    <ChatContainer>
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchContainer>
        <input type="text" placeholder="search" />
      </SearchContainer>
      <ConversationList>This is the conversation list</ConversationList>
      <NewMessageContainer>
        <a href="#"></a>
      </NewMessageContainer>
      <ChatTitle>
        <span>Scottie Schneider</span>{" "}
        <img src="../static/trash-logo.svg"></img>
      </ChatTitle>
      <ChatMessageList>Chat Message List</ChatMessageList>
      <ChatForm>
        <img src="../static/attachment-logo.svg"></img>
        <input type="text" placeholder="type a message" />
      </ChatForm>
    </ChatContainer>
  </ChatBody>
);

export default Home;
