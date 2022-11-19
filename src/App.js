import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import "./App.css";
import Black from "./images/Black.jpg";

import Card from "./component/Card";
import Blogs from "./Blogs";
import AnimationText from "./AnimationText";
import Tag from "./component/Tag";
import SwitchToDark from "./component/SwitchToDark";
import Projects from "./component/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  let skillArr = [
    "JavaScript",
    "React JS",
    "Redux / Redux Toolkit",
    "Bootstrap",
    "Git",
    "Figma",
    " Styled Components",
    "Node JS",
    "Express JS",
    " Mongo DB",
    "HTML",
    "CSS",
    "JQuery",
    " Rest API",
    "Adobe XD",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      // clear Timer for performance;
      clearTimeout(timer);
    };
  }, []);

  function scrollDown(e) {
    e.preventDefault();

    window.scroll(0, 1000);
  }
  function handleMode() {
    setIsDarkMode((prev) => !prev);
  }
  return (
    <React.Fragment>
      {isLoading ? (
        <AnimationText />
      ) : (
        <div
          style={{
            position: "relative",
          }}
        >
          <MainContainer isDarkMode={isDarkMode}>
            <Container>
              <ProfileBox>
                <Card handleMode={handleMode} isDarkMode={isDarkMode} />
              </ProfileBox>
              <DetailBox>
                <OtherDetails>
                  <Header> RECENTLY PUBLISHED </Header>
                  <Blogs
                    title="What is MongoDB Trigger?"
                    description="A simpler way to understand MongoDB Trigger."
                    link="https://medium.com/@mdirfankhan98455/what-is-mongodb-trigger-f8828397ccd0"
                    isDarkMode={isDarkMode}
                  />
                  <Blogs
                    title="Component LifeCycle with useEffect Hook in React Js"
                    description="The simple way to understand Lifecycle with the hook."
                    link="https://medium.com/@mdirfankhan98455/component-lifecycle-with-useeffect-hook-in-react-js-293d1b431e1a"
                    isDarkMode={isDarkMode}
                  />
                </OtherDetails>
              </DetailBox>
              <SkillContainer isDarkMode={isDarkMode}>
                <Header> SKILLS </Header>
                <SkillBox>
                  {skillArr.map((val, index) => (
                    <Tag skill={val} key={index} />
                  ))}
                </SkillBox>
              </SkillContainer>
            </Container>
            <ScrollContainer>
              <ScrollBox onClick={scrollDown}>
                <ScrollCircle />
              </ScrollBox>
            </ScrollContainer>
          </MainContainer>

          <ProjectContainer isDarkMode={isDarkMode}>
            <Projects isDarkMode={isDarkMode} />
          </ProjectContainer>
        </div>
      )}
    </React.Fragment>
  );
}

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  color: #fff;
  font-family: "Roboto Mono", monospace;

  ${({ isDarkMode }) =>
    isDarkMode
      ? `background-color: #121212`
      : `background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)`};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 844px) {
    height: 100%;
  }
`;

const Header = styled.h1`
  letter-spacing: 3px;
  font-size: 40px;
  font-family: "Roboto Mono", monospace;

  font-weight: 700;
`;
const ProfileBox = styled.div`
  width: 92%;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 15px;
  grid-row: auto/ span 2;
`;
const DetailBox = styled.div`
  width: 100%;
  height: 320px;
  border: none;
  margin-top: 10px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  overflow-y: scroll;
  grid-column: auto / span 2;
`;
const OtherDetails = styled.div`
  padding: 10px;
`;
const Container = styled.div`
  display: grid;
  direction: ltr;
  writing-mode: horizontal-tb;

  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);

  @media (max-width: 667px) {
    grid-template-columns: 1fr 1fr;
    display: block;
    justify-content: center;
    align-items: center;
  }
`;

const SkillContainer = styled.div`
  width: 97%;
  height: 220px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  grid-column: auto / span 2; //important
  border: none;
  border-radius: 15px;
  padding: 10px;
  overflow-y: scroll;
  margin-top: 10px;

  @media (max-width: 667px) {
    height: 100%;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.15);
    ${({ isDarkMode }) =>
      isDarkMode
        ? `background-image: url(${Black})`
        : `background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)`};
  }
`;
const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProjectContainer = styled.div`
  width: 100vw;
  height: 800px;
  color: #fff;
  font-family: "Roboto Mono", monospace;

  ${({ isDarkMode }) =>
    isDarkMode
      ? `background-color: #121212`
      : `background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)`};
  @media (max-width: 1452px) {
    height: 72rem;
  }
  @media (max-width: 1186px) {
    height: 95rem;
  }
  @media (max-width: 899px) {
    height: 115rem;
  }
  @media (max-width: 683px) {
    height: 220rem;
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  bottom: -20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* 
  ${({ isDarkMode }) =>
    isDarkMode
      ? `background-color: #121212`
      : `background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)`}; */

  @media (max-width: 1643px) {
    bottom: -6px;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
const ScrollBox = styled.div`
  width: 30px;
  height: 60px;
  border: 2px solid white;
  margin: 7px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
`;
const scrollAnimation = keyframes`
 0% { 
top:7px
  }
 30% { top:15px
 }
 40% { top:18px
 }
 100% { top:40px
 }
`;

const ScrollCircle = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  background-color: white;
  border-radius: 50%;
  margin: 3px;
  animation: ${scrollAnimation} 1s infinite ease-in-out;

  @media (max-width: 683px) {
    height: 220rem;
  }
`;

export default App;
