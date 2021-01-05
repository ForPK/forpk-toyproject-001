import React from "react";
import { NowWrap, NowItem } from "./styled";
import NowToday from "./NowToday/index";

const Now = () => {
  return (
    <NowWrap>
      <NowItem>ORDER #00846</NowItem>
      <NowItem>
        <NowToday />
      </NowItem>
    </NowWrap>
  );
};

export default Now;
