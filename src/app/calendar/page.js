"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import List from "../components/List";
import dayjs from "dayjs";
import "public/calendar.css";

const calendar = () => {
  const [value, onChange] = useState(new Date());
  const [list, setList] = useState({
    date: "",
    isOpen: false,
    tasks: ["할일1", "할일2"],
  });

  return (
    <div className="w-h-100">
      <Navbar />
      <div className="w-h-100 flexbox" style={{ paddingTop: "65px" }}>
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
        {list.isOpen && <List list={list} />}
      </div>
    </div>
  );
};

export default calendar;
