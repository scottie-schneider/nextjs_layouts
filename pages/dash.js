import styled from "styled-components";
import HomeIcon from "../components/icons/HomeIcon";
import DashIcon from "../components/icons/DashIcon";
import AlertIcon from "../components/icons/AlertIcon";
import ServiceIcon from "../components/icons/ServiceIcon";
import FolderIcon from "../components/icons/FolderIcon";
import LibraryIcon from "../components/icons/LibraryIcon";
import CarIcon from "../components/icons/CarIcon";
import ChatIcon from "../components/icons/ChatIcon";

const DashStyles = styled.div`
  height: 100vh;
`;
// SIDEBAR
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100vh;
  width: 270px;
  background-color: #252529;
  color: #fff;
`;
const SidebarMenu = styled.ul`
  display: flex;
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

// END SIDEBAR
const Dash = () => {
  return (
    <DashStyles>
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
          <MenuSignOut>Sign Out</MenuSignOut>
        </SidebarMenu>
      </SidebarContainer>
    </DashStyles>
  );
};

export default Dash;
