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

export default AnimationText;
