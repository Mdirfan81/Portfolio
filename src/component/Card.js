import React from "react";
import "./Card.css";
import { FaLinkedin, FaGithubAlt, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Card = () => {
  return (
    <div className="card-Wrapper">
      <div className="card-Img">
        <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg" />
      </div>
      <div className="card-Contant">
        <div className="section-1">
          <h1>Md Irfan Khan</h1>
          <p>Full stack Developer</p>
          <p>Link</p>
        </div>
      </div>

      <div className="section-2">
        <a className="link" href="">
          <MdEmail /> Email
        </a>
        <a className="link linked-In" href="">
          <FaLinkedin /> Linked In
        </a>
      </div>
      <div className="card-Contant">
        <div className="section-3 card-Contant">
          <div className="About-Section">
            <h1>About</h1>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
        </div>
      </div>

      <div className="card-Icons">
        <a className="icon-1" href="www.linkedin.com">
          <FaLinkedin size="30" />
        </a>
        <a className="icon-2" href="">
          <FaGithubAlt size="30" />
        </a>
        <a className="icon-3" href="">
          <FaTwitterSquare size="30" />
        </a>
        <a className="icon-4" href="">
          <MdEmail size="30" />
        </a>
      </div>
    </div>
  );
};

export default Card;
