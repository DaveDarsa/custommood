import styled from "styled-components";

export const StyledLandscape = styled.div`
  padding: 38vh 0;
  width: 100vw;
  background-image: url(${(props) => props.bgimg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
`;
