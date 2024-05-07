import styled from "styled-components";
import { lightTheme, darkTheme } from "../Themes/themes";

export const StyledSidebarWrapper = styled.div`
  height: 100vh;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.light.background
      : props.theme.dark.background};
`;

export const StyledLogoWrapper = styled.div`
  width: 50%;
  padding-top: 30px;
  margin-left: 15%;
`;

export const StyledLogoImage = styled.img`
  width: 70%;
  margin-left: 30%;
`;

export const StyledLogoText = styled.h4`
  margin-left: 25%;
  font-size: large;
  color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.light.text
      : props.theme.dark.text};
  font-style: italic;
  font-family: cursive;
`;

export const StyledLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const StyledLinkItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #7d8da1;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.theme.mode === "light"
        ? props.theme.light.text
        : props.theme.dark.text};
    margin-left: 0.8rem;
  }

  transition: margin-left 0.5s ease;
`;

export const StyledLinkLogoutItem = styled(StyledLinkItem)`
  position: absolute;
  bottom: 2rem;
  width: 100%;
`;

export const StyledLinkTitle = styled.span`
  margin-left: 10px;
`;
