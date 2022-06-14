import React, { CSSProperties } from "react";
import styled from "styled-components";
import "./AnimationText.scss";
import "./App.css";

const AnimationText = () => {
  return (
    <Container>
      <section className="rotatingText">
        <div className="rotatingText-content">
          <h1 className="rotatingText-description">
            HELLO <span className="wave">👋</span>
          </h1>
          <h3 className="rotatingText-adjective">You're</h3>
          <h3 className="rotatingText-adjective">
            Awesome<span className="wave secondEmoji">👌</span>
          </h3>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background: -webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
`;
// const Text = styled.h1`
//   --total: calc(var(--duration) + var(--delay));
//   position: relative;
//   display: block;
//   color: transparent;
//   overflow: hidden;
//   animation: revealText 1s var(--total) forwards;

//   span:after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     transform: scaleX(0);
//     transform-origin: left;
//     background: #bb93fc;
//     animation: rollIN var(--duration) var(--delay) forwards,
//       rollOut var(--duration) var(--total) forwards;
//   }

//   span:nth-child(2):after {
//     border-top: 3px solid #896ab9;
//   }

//   @keyframes revealText {
//     to {
//       color: #fff;
//     }
//   }
//   @keyframes rollIN {
//     from {
//       transform: scaleX(0);
//     }
//     to {
//       transform: scaleX(1);
//     }
//   }
//   @keyframes rollOut {
//     from {
//       transform: scaleX(0);
//     }
//     to {
//       transform: scaleX(105%);
//     }
//   }
// `;

export default AnimationText;
