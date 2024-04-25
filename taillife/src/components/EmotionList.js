import React from "react";
import styled from "styled-components";

const EmotionList = ({ item }) => {
  console.log(item);
  return (
    <EmotionWrapper className={["EmotionItem"]}>
      <Emotion src={item.img} alt={`emotion${item.id}`} />
      <span>{item.name}</span>
    </EmotionWrapper>
  );
};

export default EmotionList;

const EmotionWrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emotion = styled.img`
  width: 50px;
  margin-bottom: 10px;
`;
