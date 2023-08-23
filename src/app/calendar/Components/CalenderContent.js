// "use client";

import Calendar from "react-calendar";
import dayjs from "dayjs";
import "public/css/Calendar.css";

const CalendarContent = ({ value, onChange, list, setList, holidays }) => {
  return (
    <Calendar
      locale="en"
      onChange={onChange}
      value={value}
      calendarType="gregory"
      tileClassName={({ date }) => {
        const findSat = date.getDay();
        const holiday = holidays.find(
          (holiday) => holiday.date === dayjs(date).format("YYYY-MM-DD")
        );
        return holiday
          ? "holiday"
          : findSat === 6
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
      tileContent={({ date, view }) => {
        const holiday = holidays.find(
          (holiday) => holiday.date === dayjs(date).format("YYYY-MM-DD")
        );
        return holiday && view === "month" ? (
          <div className="holiday left-[30px] top-[8.5px] text-[12px]">
            {holiday.title}
          </div>
        ) : (
          ""
        );
      }}
      className={list.isOpen ? "react-calendar-75" : ""}
    />
  );
};

export default CalendarContent;
