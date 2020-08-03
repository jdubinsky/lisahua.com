import styled from "styled-components";

export const Badge = styled.div`
  width: 213px;
  height: 35px;
  border-radius: 5px;
  padding: 5px 0px 5px 10px;
  display: flex;
  align-items: center;
  z-index: ${(props) => (props.isHomePage ? "unset" : 1)};
`;

export const ActiveBadge = styled(Badge)`
  background: #e7fbcf;
`;

export const StatusText = styled.span`
  font-family: Avenir;
  font-weight: 800;
  font-size: 18px;
  color: #294e38;
`;

export const StatusDot = styled.div`
  width: 10.5px;
  height: 10.5px;
  background: #6fcf97;
  border-radius: 135px;
  margin-left: 6px;
`;
