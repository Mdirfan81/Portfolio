import React from "react";
import styled from "styled-components";

const SwitchToDark = () => {
  return (
    <SwitchContainer>
      <Container>
        <Circle></Circle>
      </Container>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  width: 30px;
  height: 80px;
  background-color: white;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
const Container = styled.div`
  width: 28px;
  height: 100px;
  background-color: red;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  position: relative;
`;
const Circle = styled.div`
  width: 25px;
  height: 25px;
  background-color: #121212;
  border-radius: 50%;
  position: absolute;
  top: 3px;
`;

export default SwitchToDark;
