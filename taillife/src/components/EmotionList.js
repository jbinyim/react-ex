import React from "react";
import styled from "styled-components";

const EmotionList = ({ item, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(item.id);
  };
  return (
    <EmotionWrapper
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${item.id}` : "EmotionItem_off",
      ].join(" ")}
      onClick={handleOnClick}
    >
      <Emotion src={item.img} alt={`emotion${item.id}`} />
      <EmotionText>{item.name}</EmotionText>
    </EmotionWrapper>
  );
};

export default EmotionList;

const EmotionWrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.EmotionItem_off {
    background: #ecececec;
  }
  &.EmotionItem_on_1 {
    background: #64c964;
    color: #fff;
  }
  &.EmotionItem_on_2 {
    background: #9dd772;
    color: #fff;
  }
  &.EmotionItem_on_3 {
    background: #fdce17;
    color: #fff;
  }
  &.EmotionItem_on_4 {
    background: #fd8446;
    color: #fff;
  }
  &.EmotionItem_on_5 {
    background: #fd565f;
    color: #fff;
  }
`;

const Emotion = styled.img`
  width: 50px;
  margin-bottom: 10px;
`;

const EmotionText = styled.span`
  font-size: 18px;
  width: 72px;
  text-align: center;
`;
