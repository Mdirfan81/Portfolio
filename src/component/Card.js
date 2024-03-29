import React, { useState } from "react";

import "./Card.css";

import { FaLinkedin, FaGithubAlt, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { RiMediumLine } from "react-icons/ri";
import { FiSun, FiMoon } from "react-icons/fi";

import styled, { keyframes } from "styled-components";

const Card = ({ isDarkMode, handleMode }) => {
  return (
    <div className="card-Wrapper">
      <ImageContainer>
        <CustomCard className="card">
          <CustomCardContent>
            <CustomCardTitle> MD IRFAN KHAN</CustomCardTitle>
            <CustomCardDescription>MERN Full-Stack</CustomCardDescription>
            <CustomCardDescription>Developer</CustomCardDescription>
          </CustomCardContent>
        </CustomCard>

        <ul className="ul">
          <li>
            <a target="_blank" href="https://in.linkedin.com/in/mdirfankhandev">
              <FaLinkedin size="30" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Mdirfan81" target="_blank">
              <FaGithubAlt size="30" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@mdirfankhan98455" target="_blank">
              <RiMediumLine size="30" className="icon" />
            </a>
          </li>
          <li>
            <a href="mailto: mdirfankhan98455@gmail.com" target="_blank">
              <MdEmail size="30" className="icon" />
            </a>
          </li>
          <li>
            <div onClick={handleMode}>
              {isDarkMode ? (
                <DarkMode size="30"></DarkMode>
              ) : (
                <FiMoon size="30" />
              )}
            </div>
          </li>
        </ul>
      </ImageContainer>

      <div className="section-2">
        <a
          className="link"
          target="_blank"
          href="https://drive.google.com/file/d/1BjCOlbRDwyF6i6C0wvQN9O4OeSWCbNkn/view"
        >
          <IoNewspaper size="20" />
          <span>Resume</span>
        </a>
      </div>
      <div className="card-Contant">
        <div className="section-3 card-Contant">
          <div className="SectionAbout">
            <h1 style={{ margin: "0px 0px 10px 0px" }}>About</h1>
            <p>
              I am a Full-Stack developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CustomCard = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  color: #a18a96;
  background: url("https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966")
    center no-repeat;
  background-size: cover;
  border-radius: 20px;
  overflow: hidden;
  margin: 20px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.25s;
  }
`;
const CustomCardContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-top-left-radius: 20px;
  transform: translateY(70px);
  transition: transform 0.25s;
  color: black;

  &:hover {
    transform: translateY(0);
  }
`;
const CustomCardTitle = styled.h3`
  color: black;
  font-family: "Roboto Mono", monospace;
  line-height: 15px;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 10px;
  transition: text-shadow 200ms;
  text-shadow: red 0 0, cyan 0 0;

  &:hover {
    text-shadow: red -3px 0, cyan 3px 0;
  }
`;
const CustomCardSubtitle = styled.span`
  color: black;
  display: block;
  font-size: 18px;
  font-weight: 500;
`;
const CustomCardDescription = styled.p`
  font-weight: 500;
  font-size: 18px;
  opacity: 1;
  font-family: "Roboto Mono", monospace;
  transition: opcaity 0.5s;
  color: black;
`;

const rotateSun = keyframes`
 from { transform:rotate(0deg) }
 
 to { transform:rotate(360deg) }
`;
const DarkMode = styled(FiSun)`
  &:hover {
    animation: 2s linear ${rotateSun} infinite;
  }
`;

export default Card;
