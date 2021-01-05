import React, { useState, useEffect } from "react";
import { NowDate, NowDay, NowTime } from "./styled";

const NowToday = () => {
  const [realTime, setRealTime] = useState(new Date());

  useEffect(() => {
    const moment = setInterval(() => {
      setRealTime(new Date());
    }, 1000);
    return () => clearInterval(moment);
  }, []);

  const twoDigitsDate = (n) => {
    return n < 10 ? "0" + n : n;
  };

  const dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const year = realTime.getFullYear();
  const month = twoDigitsDate(realTime.getMonth() + 1);
  const date = twoDigitsDate(realTime.getDate());
  const day = dayArray[realTime.getDay()];

  const timeNow = realTime.toLocaleTimeString("KR", {
    timeZone: "Asia/Seoul",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <NowDate>
        {year}/{month}/{date}
      </NowDate>

      <NowDay>{day}</NowDay>

      <NowTime>{timeNow}</NowTime>
    </>
  );
};
export default NowToday;
