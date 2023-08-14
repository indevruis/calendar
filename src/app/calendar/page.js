"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import "public/calendar.css";

const calendar = () => {
  const [value, onChange] = useState(new Date());

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
        />
      </div>
    </div>
  );
};

export default calendar;
