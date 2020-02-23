import React from "react";
import styled from "styled-components";
import DashIcon from "./icons/DashIcon";
import AlertIcon from "./icons/AlertIcon";
import ServiceIcon from "./icons/ServiceIcon";
import FolderIcon from "./icons/FolderIcon";
import LibraryIcon from "./icons/LibraryIcon";
import CarIcon from "./icons/CarIcon";
import ChatIcon from "./icons/ChatIcon";

// SIDEBAR
const SidebarContainer = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: calc(100vh - 40px);
  background-color: #252529;
  color: #fff;
  @media (max-width: 1000px) {
    transform: translateX(-235px);
    transition: transform 250ms ease-in-out;
  }
`;
const SidebarMenu = styled.ul`
  display: flex;
  height: 100%;
  position: fixed;
  left: 0;
  width: 235px;
  align-items: flex-start;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding: 0px 30px;
`;
const SidebarMenuItem = styled.li`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
  }
`;
const SidebarMenuItemLabel = styled.p`
  margin-left: 20px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  color: #ffffff;
`;

const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  height: 45px;
  color: #fff;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #2e2e33;
`;

const MenuSignOut = styled.div`
  border-top: 1px solid #2e2e33;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  height: 45px;
  color: #fff;
  margin-top: 200px;
`;

const MenuCollapse = styled.div`
  border-top: 1px solid #2e2e33;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  height: 45px;
  color: #fff;
  margin-top: 100px;
  cursor: pointer;
`;
// END SIDEBAR

const Sidebar = ({ collapseMenu }) => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <MenuLogo>
          <ChatIcon />
          FollowupEdge
        </MenuLogo>
        <SidebarMenuItem>
          <DashIcon size={30} />
          <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <AlertIcon size={30} />
          <SidebarMenuItemLabel>Service Alerts</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <ServiceIcon size={30} />
          <SidebarMenuItemLabel>Customer Tickets</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <FolderIcon size={30} />
          <SidebarMenuItemLabel>Archive</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <LibraryIcon size={30} />
          <SidebarMenuItemLabel>Library</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <CarIcon size={30} />
          <SidebarMenuItemLabel>Deliveries</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <MenuCollapse>
          <p onClick={collapseMenu}>Collapse</p>
        </MenuCollapse>
        <MenuSignOut>Sign Out</MenuSignOut>
      </SidebarMenu>
    </SidebarContainer>
  );
};
export default Sidebar;
