import React from "react";
import styled from "styled-components";

const Blogs = ({ title, description, link }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Discription>{description}</Discription>
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
`;
const Title = styled.h2`
  color: black;
  margin: 3px;
`;
const Discription = styled.p`
  color: black;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  padding: 4px;
  font-weight: 700;
`;
const Link = styled.a`
  color: black;
  cursor: pointer;
  position: relative;
  top: 8px;
  float: right;
  font-weight: 700;
  color: blue;
  text-decoration: none;
  padding: 5px;
`;
export default Blogs;
