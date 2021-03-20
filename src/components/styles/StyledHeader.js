import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #0a0008;
  width: 100vw;
  min-height: 10vh;
  color: white;
  overflow: hidden;
  position: relative;
  .title {
    text-align: center;
    font-family: "Playball", cursive;
    font-size: 4.5rem;
    /* color: #f4f4f4; */

    background: linear-gradient(
      90deg,
      rgba(223, 178, 235, 1) 29%,
      rgba(255, 239, 225, 1) 43%,
      rgba(122, 229, 245, 1) 59%,
      rgba(73, 39, 130, 1) 69%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .landscapecontrols {
    width: 60vw;
    margin: 0 auto;

    h4 {
      font-size: 2rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: -0.5rem;
    }
  }

  .controls {
    display: flex;
    justify-content: space-around;
    ul {
      list-style: none;
      padding: 0 3vw;
      display: flex;
      justify-content: space-around;
      transform: translateY(-2rem);
    }
    h5 {
      font-size: 1.8rem;
      font-weight: 800;
      text-align: center;
    }
    button {
      background-color: transparent;
      cursor: pointer;
      outline: none;
      box-shadow: none;
      border: none;
      font-size: 1.5rem;
      color: #f4f4f4;
      transition: all 0.2s ease;
      font-smooth: antialiased;
      border-bottom: 1px solid transparent;
      padding-bottom: 0.5rem;
      :active {
        transform: scale(0.95);
      }
      :hover {
        border-color: #ff4a65;
      }
    }
    .freezetime {
      font-size: 1.5rem;
      color: #abcbe7;
      align-self: center;
    }
    .timecontrols {
      display: flex;
      flex-basis: 25vw;
      flex-direction: column;
      justify-content: space-around;

      .sunrise button {
        color: #fc8561;
      }
      .morning button {
        color: #f5b48b;
      }
      .midday button {
        color: #4bc5ff;
      }
      .night button {
        color: #7245c9;
      }
    }

    .weathercontrols {
      display: flex;
      flex-basis: 25vw;
      flex-direction: column;
      .normal button {
        color: #ff6b00;
      }
      .rain button {
        color: #4d97ef;
      }
      .snow button {
        color: #b4afac;
      }
    }
  }
`;
