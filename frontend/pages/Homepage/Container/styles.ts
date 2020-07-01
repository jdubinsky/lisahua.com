import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #e5e5e5;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    height: 100vh;
  }
`;
