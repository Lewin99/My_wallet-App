import styled from "styled-components";

export const StyledSidebarWrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-weight: medium;
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
  margin-left: 20px;

  &:hover {
    cursor: pointer;
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
