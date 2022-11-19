import React from "react";
import styled from "styled-components";

const Tag = ({ skill }) => {
  var randomColor = Math.floor(Math.random() * 656777215).toString(16);

  return (
    <TagContainer style={{ background: `#${randomColor}` }}>
      <TagName>{skill}</TagName>
    </TagContainer>
  );
};

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
  transition: 0.5s ease-in;
  &:hover {
    border: 1px;
    transform: scale(1.2);
  }
`;
const TagName = styled.h4`
  font-family: "Roboto Mono", monospace;
`;

export default Tag;
