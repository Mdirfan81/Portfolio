import React from "react";
import styled from "styled-components";

const Blogs = ({ title, description, link, isDarkMode }) => {
  return (
    <Container isDarkMode={isDarkMode}>
      <Title isDarkMode={isDarkMode}> {title}</Title>
      <Discription isDarkMode={isDarkMode}>{description}</Discription>
      <Link target="_blank" href={link}>
        👉 Read more
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  height: auto;
  background-color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  display: block;
  overflow: hidden;

  ${({ isDarkMode }) => (isDarkMode ? `background-color: #737373` : null)};
`;
const Title = styled.h2`
  ${({ isDarkMode }) => (isDarkMode ? `color: white;` : `color: black;`)};
  font-family: "Roboto Mono", monospace;

  margin: 3px;
`;
const Discription = styled.p`
  ${({ isDarkMode }) => (isDarkMode ? `color: white;` : `color: black;`)};
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  padding: 4px;
  font-family: "Roboto Mono", monospace;
`;
const Link = styled.a`
  color: black;
  cursor: pointer;
  position: relative;
  top: 8px;
  float: right;
  font-family: "Roboto Mono", monospace;

  font-weight: 700;
  color: blue;
  text-decoration: none;
  padding: 5px;
`;
export default Blogs;
