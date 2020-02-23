import React, { useRef } from "react";
import useOutsideClick from "./useOutsideClick";
import styled from "styled-components";
import DashIcon from "./icons/DashIcon";
import AlertIcon from "./icons/AlertIcon";
import ServiceIcon from "./icons/ServiceIcon";
import FolderIcon from "./icons/FolderIcon";
import LibraryIcon from "./icons/LibraryIcon";
import CarIcon from "./icons/CarIcon";
import ChatIcon from "./icons/ChatIcon";

const MobileSidebarStyles = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  background-color: #252529;
  height: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  width: 250px;
  margin-top: 0px;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-290px)")};
  transition: transform 250ms ease-in-out;
  background: linear-gradient(180deg, #fc466b 0%, #3f5efb 100%);
`;
// MOBILE SIDEBAR MENU
const MobileSidebarMenu = styled.ul`
  display: flex;
  height: 100%;
  position: fixed;
  left: 0;
  align-items: flex-start;
  flex-direction: column;
  list-style: none;
  padding: 0px 30px;
`;
const MobileSidebarMenuItem = styled.li`
  display: flex;
  height: 40px;
  align-items: center;
  width: 80%;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
  }
`;
const MobileSidebarMenuItemLabel = styled.p`
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

const MobileMenuLogo = styled.div`
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

const MobileMenuSignOut = styled.div`
  border-top: 1px solid #2e2e33;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  height: 45px;
  color: #fff;
  margin-top: 200px;
`;

// END MOBILE SIDEBAR MENU
const MobileSidebar = ({ open, handleMenuClick }) => {
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (open) {
      handleMenuClick();
    }
  });
  return (
    <MobileSidebarStyles ref={ref} open={open}>
      <MobileSidebarMenu>
        <MobileMenuLogo>
          <ChatIcon />
          Workspace Name
        </MobileMenuLogo>
        <MobileSidebarMenuItem>
          <DashIcon size={30} />
          <MobileSidebarMenuItemLabel>Dashboard</MobileSidebarMenuItemLabel>
        </MobileSidebarMenuItem>
        <MobileSidebarMenuItem>
          <AlertIcon size={30} />
          <MobileSidebarMenuItemLabel>
            Service Alerts
          </MobileSidebarMenuItemLabel>
        </MobileSidebarMenuItem>
        <MobileSidebarMenuItem>
          <ServiceIcon size={30} />
          <MobileSidebarMenuItemLabel>
            Customer Tickets
          </MobileSidebarMenuItemLabel>
        </MobileSidebarMenuItem>
        <MobileSidebarMenuItem>
          <FolderIcon size={30} />
          <MobileSidebarMenuItemLabel>Archive</MobileSidebarMenuItemLabel>
        </MobileSidebarMenuItem>
        <MobileSidebarMenuItem>
          <LibraryIcon size={30} />
          <MobileSidebarMenuItemLabel>Library</MobileSidebarMenuItemLabel>
        </MobileSidebarMenuItem>
        <MobileSidebarMenuItem>
          <CarIcon size={30} />
          <MobileSidebarMenuItemLabel>Deliveries</MobileSidebarMenuItemLabel>
        </MobileSidebarMenuItem>
        <MobileMenuSignOut>Sign Out</MobileMenuSignOut>
      </MobileSidebarMenu>
    </MobileSidebarStyles>
  );
};
export default MobileSidebar;
