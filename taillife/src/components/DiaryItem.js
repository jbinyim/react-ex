import React from "react";
import { getEmotionImgById } from "../util";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import styled from "styled-components";

const DiaryItem = ({ it }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diaryinfo/${it.id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${it.id}`);
  };
  return (
    <ItemOfDiary>
      <DiaryimageBox
        onClick={goDetail}
        className={`img_section img_section_${it.emotionId}`}
      >
        <DiaryImage src={getEmotionImgById(it.emotionId)} />
      </DiaryimageBox>
      <InfoSection onClick={goDetail}>
        <DataWrapper>{new Date(it.date).toLocaleDateString()}</DataWrapper>
        <ContentWrapper>{it.content.slice(0, 25)}</ContentWrapper>
      </InfoSection>
      <div>
        <Buttons onClick={goEdit} text="수정" />
      </div>
    </ItemOfDiary>
  );
};

export default DiaryItem;

const ItemOfDiary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2e2;
`;
const DiaryimageBox = styled.div`
  cursor: pointer;
  width: 120px;
  height: 80px;
  border-radius: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  &.img_section_1 {
    background: #64c964;
  }
  &.img_section_2 {
    background: #9dd772;
  }
  &.img_section_3 {
    background: #fdce17;
  }
  &.img_section_4 {
    background: #fd8446;
  }
  &.img_section_5 {
    background: #fd565f;
  }
`;
const DiaryImage = styled.img`
  width: 50%;
`;
const InfoSection = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;
const DataWrapper = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;
const ContentWrapper = styled.div`
  font-size: 18px;
`;
