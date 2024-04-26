import React from "react";
import { emotionList } from "../util";
import styled from "styled-components";

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  return (
    <ViewerDiary>
      <Title>
        <h4>오늘의 꼬리</h4>
        <Imgbox>
          <Img src={emotionItem.img} />
          <p>{emotionItem.name}</p>
        </Imgbox>
      </Title>
      <Text>
        <h4>꼬리의 하루</h4>
        <TextBox>
          <p>{content}</p>
        </TextBox>
      </Text>
    </ViewerDiary>
  );
};

export default Viewer;

const ViewerDiary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 100px;
`;
const Title = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Imgbox = styled.div`
  text-align: center;
`;
const Img = styled.img`
  margin-bottom: 20px;
`;
const Text = styled.div`
  border-top: 1px dashed #ecececec;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
const TextBox = styled.div`
  margin-top: 10px;
  padding: 30px;
  background: #ecececec;
  border-radius: 10px;
  min-height: 200px;
`;
