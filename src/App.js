import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./component/Card";
import styled from "styled-components";
import Blogs from "./Blogs";
import AnimationText from "./AnimationText";
import Tag from "./component/Tag";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      // clear Timer for performance;
      clearTimeout(timer);
    };
  }, []);
  return (
    <React.Fragment>
      {isLoading ? (
        <AnimationText />
      ) : (
        <MainContainer>
          <Container>
            <ProfileBox>
              <Card />
            </ProfileBox>
            <DetailBox>
              <OtherDetails>
                <Header> RECENTLY PUBLISHED </Header>
                <Blogs
                  title="What is MongoDB Trigger?"
                  description="A simpler way to understand MongoDB Trigger."
                  link="https://medium.com/@mdirfankhan98455/what-is-mongodb-trigger-f8828397ccd0"
                />
                <Blogs
                  title="Component LifeCycle with useEffect Hook in React Js"
                  description="The simple way to understand Lifecycle with the hook."
                  link="https://medium.com/@mdirfankhan98455/component-lifecycle-with-useeffect-hook-in-react-js-293d1b431e1a"
                />
              </OtherDetails>
            </DetailBox>
            <SkillContainer>
              <Header> SKILLS </Header>
              <SkillBox>
                <Tag skill="JavaScript" />
                <Tag skill="React JS" />
                <Tag skill="Redux / Redux Toolkit" />
                <Tag skill="Bootstrap" />
                <Tag skill="Git" />
                <Tag skill="Figma" />
                <Tag skill="Styled Components" />
                <Tag skill="Node JS" />
                <Tag skill="Express JS" />
                <Tag skill="Mongo DB" />
                <Tag skill="HTML" />
                <Tag skill="CSS" />
                <Tag skill="JQuery" />
                <Tag skill="Rest API" />
                <Tag skill="Adobe XD" />
              </SkillBox>
            </SkillContainer>
          </Container>
        </MainContainer>
      )}
    </React.Fragment>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  color: #fff;
  background: -webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
    radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  letter-spacing: 3px;
  font-size: 40px;
  font-weight: bolder;
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

  @media (max-width: 667px) {
    height: 100%;
    color: #fff;
    background: -webkit-linear-gradient(
        110deg,
        #a60af3 40%,
        rgba(0, 0, 0, 0) 30%
      ),
      -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
      -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
      -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
      radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  }
`;
const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* @media (max-width: 667px) {
    color: #fff;
    background: -webkit-linear-gradient(
        110deg,
        #a60af3 40%,
        rgba(0, 0, 0, 0) 30%
      ),
      -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
      -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
      -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%),
      radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
  } */
`;

export default App;
