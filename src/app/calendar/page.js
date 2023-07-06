"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "./calendar.css";

export default function calendar() {
  const [value, onChange] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_HOLIDAY_API;

  useEffect(() => {
    getHolidayApi();
  }, []);

  const getHolidayApi = () => {
    try {
      fetch(
        `https://www.googleapis.com/calendar/v3/calendars/ko.south_korea%23holiday%40group.v.calendar.google.com/events?key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((json) => {
          setHolidays(json.items);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="react-calendar-background">
      {/* <h3>Calendar</h3> */}
      <div className="calendar-container">
        <Calendar
          locale="en"
          onChange={onChange}
          value={value}
          calendarType={"US"}
          tileContent={({ date }) => {
            const find = holidays.find(
              (holiday) =>
                holiday.start.date === moment(date).format("YYYY-MM-DD")
            );
            return find ? <div className="holidays">{find.summary}</div> : "";
          }}
          tileClassName={({ date }) => {
            const find = holidays.find(
              (holiday) =>
                holiday.start.date === moment(date).format("YYYY-MM-DD")
            );
            const dayOfTheWeek = date.getDay();
            return find || (dayOfTheWeek === 0)
              ? "react-calendar_tile--holidays"
              : dayOfTheWeek === 6
              ? "react-calendar_tile--saturday"
              : "";
          }}
        />
      </div>
    </div>
  );
}
