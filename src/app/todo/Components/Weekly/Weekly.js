"use client";

import WeeklyTodo from "./WeeklyTodo";

const Weekly = () => {
  const today = new Date();
  const todayWeek = today.getDay();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <table>
      <thead>
        <tr>
          <th className="w-[70px] font-medium">요일</th>
          <th className="w-[70px] font-medium"></th>
          <th className="w-[279px] font-medium">할일</th>
        </tr>
      </thead>
      <tbody>
        {weekdays.map((weekday, index) => (
          <WeeklyTodo weekday={weekday} todayWeek={todayWeek} index={index} key={index}/>
        ))}
      </tbody>
    </table>
  );
};

export default Weekly;
