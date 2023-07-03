"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

export default function calendar() {
  const [value, onChange] = useState(new Date());
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_HOLIDAY_API;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/ko.south_korea%23holiday%40group.v.calendar.google.com/events?key=${API_KEY}`
        )
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="react-calendar-background">
      <h3>Calendar</h3>
      <div className="calendar-container">
        <Calendar
          locale="en"
          onChange={onChange}
          value={value}
          calendarType={"US"}
        />
      </div>
    </div>
  );
}
