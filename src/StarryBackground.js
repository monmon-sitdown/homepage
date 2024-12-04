// StarryBackground.js
import React from "react";
import styled from "styled-components";

const StarryBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><filter id="f1"><feGaussianBlur in="SourceGraphic" stdDeviation="3" /></filter></defs><circle cx="10%" cy="10%" r="1" fill="white" filter="url(#f1)" /><circle cx="20%" cy="20%" r="1.5" fill="white" filter="url(#f1)" /><circle cx="30%" cy="30%" r="1" fill="white" filter="url(#f1)" /><circle cx="40%" cy="40%" r="0.5" fill="white" filter="url(#f1)" /><circle cx="50%" cy="50%" r="1" fill="white" filter="url(#f1)" /><circle cx="60%" cy="60%" r="1.5" fill="white" filter="url(#f1)" /><circle cx="70%" cy="70%" r="1" fill="white" filter="url(#f1)" /><circle cx="80%" cy="80%" r="0.5" fill="white" filter="url(#f1)" /><circle cx="90%" cy="90%" r="1" fill="white" filter="url(#f1)" /><circle cx="10%" cy="90%" r="1.5" fill="white" filter="url(#f1)" /><circle cx="90%" cy="10%" r="1.5" fill="white" filter="url(#f1)" /></svg>');
    background-repeat: no-repeat;
    background-size: cover;
    animation: twinkle 1.5s infinite alternate;
  }

  @keyframes twinkle {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StarryBackgroundComponent = () => {
  return <StarryBackground />;
};

export default StarryBackgroundComponent;
