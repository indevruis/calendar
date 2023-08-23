"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import "public/css/Calendar.css";

const CalendarContent = ({ list, setList }) => {
  const [value, onChange] = useState(new Date());
  return (
    <Calendar
      locale="en"
      onChange={onChange}
      value={value}
      calendarType="gregory"
      tileClassName={({ date }) => {
        const findSat = date.getDay();
        return findSat === 6
          ? "react-calendar__month-view__days__day--saturday"
          : "";
      }}
      onClickDay={(day, event) => {
        setList((prevState) => {
          const nowDate = dayjs(day).format("YYYY-MM-DD");
          const isOpened = list.isOpen
            ? nowDate === list.date
              ? false
              : true
            : true;
          return { ...prevState, date: nowDate, isOpen: isOpened };
        });
      }}
      className={list.isOpen ? "react-calendar-75" : ""}
    />
  );
};

export default CalendarContent;
