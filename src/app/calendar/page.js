"use client";

import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Calendar from "./Components/CalenderContent";
import List from "./Components/List";

const calendar = () => {
  const [value, onChange] = useState(new Date());
  const [year, setYear] = useState("2023");
  const [holidays, setHolidays] = useState([]);
  const [list, setList] = useState({
    date: "",
    isOpen: false,
    tasks: ["할일1", "할일2"],
  });

  const handleGetHolidayAPI = async () => {
    try {
      const response = await fetch(`/api/calendar/holiday?year=${year}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setHolidays(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeYear = (newYear) => {
    setYear(newYear);
  };

  useEffect(() => {
    handleGetHolidayAPI();
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-full flex justify-center items-center pt-[65px]">
        <Calendar
          value={value}
          onChange={onChange}
          list={list}
          setList={setList}
          holidays={holidays}
        />
        {list.isOpen && <List list={list} />}
      </div>
    </div>
  );
};

export default calendar;
