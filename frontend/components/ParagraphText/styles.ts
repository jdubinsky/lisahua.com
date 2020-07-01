import styled from "styled-components";

import { BeauFontDiv } from "../../text-styles";

export const Text = styled(BeauFontDiv)`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "20px")};
`;
