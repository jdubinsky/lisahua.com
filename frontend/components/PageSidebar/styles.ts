import styled from "styled-components";

interface SidebarWrapperProps {
  width: number;
  widthOffset: number;
}

interface SidebarProps {
  minWidth: string;
  maxWidth: string;
  marginRight: number;
}

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
  width: 100%;
  overflow: auto;
  background: #ffffff;

  @media only screen and (min-width: 768px) {
    max-width: ${(props: SidebarWrapperProps) =>
      `${props.width * 15}px` || "525px"};
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Sidebar = styled.div<SidebarProps>`
  padding: 10px;
  background: #ffffff;
  margin-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 768px) {
    max-width: ${(props: SidebarProps) => `${props.maxWidth}px`};
    min-width: ${(props: SidebarProps) => `${props.minWidth}px`};
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    margin-top: 90px;
    margin-left: 45px;
    margin-right: ${(props: SidebarProps) => `${props.marginRight}px`};
  }
`;
