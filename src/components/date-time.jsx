import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DateTimeText = styled.p`
  text-align: center;
  font-size: 1.75rem;
  margin: .5rem;
`;

function DateTime() {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);

  const getDate = () => {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    setDate(mm + "-" + dd + "-" + yyyy);
  };

  const getTime = () => {
    let date = new Date(),
      min = date.getMinutes(),
      sec = date.getSeconds(),
      hour = date.getHours();
    setTime(
      "" +
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (min < 10 ? "0" + min : min) +
        ":" +
        (sec < 10 ? "0" + sec : sec)
    );
  };

  useEffect(() => {
    getDate();

    const interval = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      {time ? (
        <DateTimeText>{time}</DateTimeText>
      ) : (
        <DateTimeText>Calculating time...</DateTimeText>
      )}
      <DateTimeText>{date}</DateTimeText>
    </div>
  );
}

export default DateTime;
