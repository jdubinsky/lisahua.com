import styled from "styled-components";

export const SidebarMenu = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    min-width: 100px;
    max-width: 287px;
    padding-left: 35px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 30px;
`;

export const SelectedMenuItem = styled.span`
  font-family: Avenir;
  font-weight: 800;
  font-size: 18px;
  color: #21282e;
  margin-right: 12px;
`;

export const MenuItem = styled.span`
  font-family: Avenir;
  font-size: 18px;
  color: #21282e;
`;
