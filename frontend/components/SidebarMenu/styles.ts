import styled from "styled-components";

const MIN_WIDTH = "1000px";

export const SidebarMenu = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  background: white;
  position: fixed;
  width: 100%;
  height: 60px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    padding-left: 35px;
    flex-direction: column;
    border-bottom: none;
    background: transparent;
    height: 100%;
    width: 100px;
    top: 0;
    left: 0;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 0;
  line-height: 1em;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    margin-bottom: 30px;
  }
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
  margin-right: 15px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    margin-right: 0;
  }
`;

export const SelectedMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 27px;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    margin-right: 0;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  @media only screen and (min-width: ${MIN_WIDTH}) {
    flex-direction: column;
    align-items: baseline;
  }
`;
