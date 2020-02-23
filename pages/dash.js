import { useState } from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";

const DashStyles = styled.div`
  height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.collapse ? "70px" : "20%")} 1fr;
  grid-template-rows: 72px 1fr;
  grid-template-areas:
    "sidebar head head head"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main";
  height: 100vh;
  .header {
    grid-area: head;
    border: 1px solid red;
    box-shadow: 0 1px 0 0 #eaedf3;
  }
  .main {
    grid-area: main;
    border: 1px solid green;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    grid-template-rows: 72px 1fr;
    grid-template-areas:
      "head"
      "main";
  }
`;
const Dash = () => {
  const [collapse, setCollapse] = useState(false);
  const collapseMenu = () => {
    setCollapse(p => !collapse);
  };
  return (
    <DashStyles>
      <GridContainer collapse={collapse}>
        <Sidebar />
        <div className="header">Header</div>
        <div className="main">Main</div>
      </GridContainer>
    </DashStyles>
  );
};

export default Dash;
