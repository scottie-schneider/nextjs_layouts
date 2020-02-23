import styled from "styled-components";
import HomeIcon from "../components/icons/HomeIcon";
import DashIcon from "../components/icons/DashIcon";
import AlertIcon from "../components/icons/AlertIcon";
import ServiceIcon from "../components/icons/ServiceIcon";
import FolderIcon from "../components/icons/FolderIcon";
import LibraryIcon from "../components/icons/LibraryIcon";
import CarIcon from "../components/icons/CarIcon";

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
  align-items: center;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding: 0px 30px;
`;
const SidebarMenuItem = styled.li`
  width: 100%;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
  }
`;
const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;
const SidebarMenuItemLabel = styled.p`
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  color: #ffffff;
`;
// END SIDEBAR
const Dash = () => {
  return (
    <DashStyles>
      <SidebarContainer>
        <SidebarMenu>
          <SidebarMenuItem>
            <DashIcon />
            <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <AlertIcon />
            <SidebarMenuItemLabel>Service Alerts</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <ServiceIcon />
            <SidebarMenuItemLabel>Customer Tickets</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <FolderIcon />
            <SidebarMenuItemLabel>Archive</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <LibraryIcon />
            <SidebarMenuItemLabel>Library</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <CarIcon />
            <SidebarMenuItemLabel>Deliveries</SidebarMenuItemLabel>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContainer>
    </DashStyles>
  );
};

export default Dash;
