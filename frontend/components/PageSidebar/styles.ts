import styled from "styled-components";

interface SidebarWrapperProps {
  width: string;
  widthOffset: string;
}

interface SidebarProps {
  minWidth: string;
  maxWidth: string;
}

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
  width: 100%;
  overflow: auto;
  background: #ffffff;

  @media only screen and (min-width: 768px) {
    width: ${(props: SidebarWrapperProps) =>
      `calc(${props.width}% - ${props.widthOffset}px`});
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
    margin-right: 90px;
  }
`;
