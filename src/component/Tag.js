import React from "react";
import styled from "styled-components";

const Tag = ({ skill }) => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <TagContainer style={{ background: `#${randomColor}` }}>
      <TagName>{skill}</TagName>
    </TagContainer>
  );
};
//   <span> 80%</span>

const TagContainer = styled.div`
  width: auto;
  height: auto fit-content;
  border: none;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  &:hover {
    border: 1px;
    transform: scale(1.2);
  }
  /* span {
    display: none;
    font-weight: bold;
    transition: ease-in-out 1s;
  }
  span::before {
    content: " * ";
  }

  &:hover span {
    display: block;
  } */
`;
const TagName = styled.h4``;

export default Tag;
