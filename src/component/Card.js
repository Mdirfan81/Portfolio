import React from "react";
import "./Card.css";
import { FaLinkedin, FaGithubAlt, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { RiMediumLine } from "react-icons/ri";
import styled from "styled-components";
const Card = () => {
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
        </ul>
      </ImageContainer>

      <div className="section-2">
        <a
          className="link"
          target="_blank"
          href="https://drive.google.com/file/d/1bHY8BtEG9xz9FiF7Vi-SJyJy9I0xdsil/view?usp=sharing"
        >
          <IoNewspaper size="20" />
          <span>Resume</span>
        </a>
      </div>
      <div className="card-Contant">
        <div className="section-3 card-Contant">
          <div className="About-Section">
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
  background: url("https://i.pinimg.com/564x/58/16/78/5816788204cf0d21b333aaadab72a542.jpg")
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
  transition: opcaity 0.5s;
  color: black;
`;
export default Card;
