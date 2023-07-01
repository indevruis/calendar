"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

export default function calendar() {
  const [value, onChange] = useState(new Date());

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
