import styled from "styled-components";

export interface MarginProps {
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
}

export const MarginDiv = styled.div<MarginProps>`
  margin-top: ${props => props.marginTop || "0px"};
  margin-bottom: ${props => props.marginBottom || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
  margin-right: ${props => props.marginRight || "0px"};
`;

export const AvenirFontDiv = styled(MarginDiv)`
  font-family: avenir-roman;
  font-style: normal;
  font-weight: normal;
`;

export const BeauFontDiv = styled(MarginDiv)`
  font-family: Beau;
  font-style: normal;
  font-weight: normal;
`;
