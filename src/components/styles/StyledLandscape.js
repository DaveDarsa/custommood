import styled from "styled-components";

export const StyledLandscape = styled.div`
  padding: 38vh 0;
  width: 100vw;
  position: relative;
  background-image: url(${(props) => props.bgimg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  /* @media screen and (max-width: 500px) {
    > & {
      zoom: 0.5;
    }
  } */
  @media screen and (max-width: 811px) {
    background-size: contain;
    background-position: center top;
  }
`;
