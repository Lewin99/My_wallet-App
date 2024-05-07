import React from "react";
import {
  StyledSidebarWrapper,
  StyledLogoWrapper,
  StyledLogoImage,
  StyledLogoText,
  StyledLinksWrapper,
  StyledLinkItem,
  StyledLinkLogoutItem,
  StyledLinkTitle,
} from "./sidebarStyles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar: React.FC = () => {
  return (
    <StyledSidebarWrapper>
      <StyledLogoWrapper>
        <StyledLogoImage
          src="https://i.ibb.co/v30tzD8/pngaaa-com-4457319.png"
          alt="Logo"
        />
        <StyledLogoText>My App</StyledLogoText>
      </StyledLogoWrapper>
      <StyledLinksWrapper>
        <StyledLinkItem>
          <DashboardIcon />
          <StyledLinkTitle>Dashboard</StyledLinkTitle>
        </StyledLinkItem>
        <StyledLinkItem>
          <MonetizationOnOutlinedIcon />
          <StyledLinkTitle>Budget</StyledLinkTitle>
        </StyledLinkItem>
        <StyledLinkItem>
          <ShoppingCartOutlinedIcon />
          <StyledLinkTitle>Transactions</StyledLinkTitle>
        </StyledLinkItem>
        <StyledLinkItem>
          <TimelineOutlinedIcon />
          <StyledLinkTitle>Financial Goals</StyledLinkTitle>
        </StyledLinkItem>
        <StyledLinkItem>
          <AssessmentIcon />
          <StyledLinkTitle>Reports</StyledLinkTitle>
        </StyledLinkItem>
        <StyledLinkItem>
          <BarChartIcon />
          <StyledLinkTitle>Analytics</StyledLinkTitle>
        </StyledLinkItem>
        <StyledLinkItem>
          <SettingsIcon />
          <StyledLinkTitle>Settings</StyledLinkTitle>
        </StyledLinkItem>
        <StyledLinkLogoutItem>
          <LogoutIcon />
          <StyledLinkTitle>Logout</StyledLinkTitle>
        </StyledLinkLogoutItem>
      </StyledLinksWrapper>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
