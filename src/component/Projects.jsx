import React, { useMemo } from "react";
import styled from "styled-components";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { githubAllRepo } from "../data/Data";

const ProjectContainer = styled.div`
  margin: 0px 100px;
  height: 200px;
  border-radius: 26px;
  padding: 10px;
  text-align: center;

  ${({ isDarkMode }) =>
    isDarkMode
      ? `background-color: rgba(255,255,255,0.15)`
      : `background-color: #121212`};
`;

const Header = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-size: 40px;
  letter-spacing: 1.5px;
  font-weight: 700;
`;
const HeaderSign = styled.p`
  font-size: 40px;
  letter-spacing: 1.5px;
  font-family: "Roboto Mono", monospace;
  font-weight: 900;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 250px;
  height: 320px;

  border: 5px transparent;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  overflow: hidden;
  background-size: cover;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: 2px solid white;
  }
  ${({ image }) =>
    image
      ? `background-image:url(${image})`
      : `background-image:url(https://lottiefiles.com/images/workflow-homepage/backgrounds/background-disney.png)`}
`;
const Logo = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: auto;
  background-color: rgba(#fff, #fff, #fff, 0.8);
  padding: 10px;
  filter: drop-shadow(8px 8px 15px #fff);
`;

const Title = styled.h4`
  letter-spacing: 0.5px;
  font-size: 25px;
  position: absolute;
  bottom: 20px;
  padding: 0px 8px;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  z-index: 1;
  text-shadow: -4px -2px 10px rgba(0, 0, 0, 0.91);
`;
const Icon = styled.div`
  position: absolute;
  right: 0px;
  filter: drop-shadow(8px 12px 16px #eae7e7);
  z-index: 0;
  bottom: 0px;
  transform: rotate(-50deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    z-index: 2;
    transform: scale(1.1);
  }
`;
const PlayButton = styled.div`
  position: absolute;
  top: 180px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Projects = ({ isDarkMode }) => {
  let data = useMemo(() => githubAllRepo, [githubAllRepo]);

  const handleGoToGitHub = (e, url) => {
    e.preventDefault();
    window.open(`${url}`, "_blank");
  };
  const handleGoToDemo = (e, url) => {
    e.preventDefault();
    window.open(`${url}`, "_blank");
  };
  return (
    <ProjectContainer isDarkMode={isDarkMode}>
      <Header>Web-App</Header>
      <HeaderSign>#BuiltWithLove</HeaderSign>
      <Container>
        {data.map((repo, index) => (
          <Card key={index} image={repo.bannerImage}>
            <Logo src={repo.logo} />
            <PlayButton onClick={(e) => handleGoToDemo(e, repo.link)}>
              <AiFillPlayCircle size="90" fill="#ffffff" />
            </PlayButton>
            <Title>{repo.title}</Title>
            <Icon onClick={(e) => handleGoToGitHub(e, repo.githubLink)}>
              <FaGithubAlt size="90" fill="#121212" />
            </Icon>
          </Card>
        ))}
      </Container>
    </ProjectContainer>
  );
};

export default Projects;
