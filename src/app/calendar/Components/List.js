"use client";

import dayjs from "dayjs";
import styles from "/public/css/List.module.css";
import { useEffect, useState } from "react";

const List = ({ list }) => {
  const [today, setToday] = useState([]);

  const handleTodayData = async () => {
    try {
      const response = await fetch(`/api/todos/getToday?date=${list.date}`, {
        method: "GET",
      })
      const todayTodo = await response.json();
      console.log(todayTodo)
      // setToday(todayTodo)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleTodayData();
  }, [today]);

  const nowDate = dayjs(list.date).format("YYYY.MM.DD");
  return (
    <div className={`${styles.background}`}>
      <div className={`${styles.clickedDay}`}>{nowDate}</div>
      <div className={`${styles.tasks}`}>
        <span className={`${styles.taskTitle}`}>Today</span>
        {list.tasks.map((task, i) => (
          <div key={i} className="flex m-[1px] items-center">
            <span className={`${styles.checkBox}`}></span>
            <span className={`${styles.task}`}>{task}</span>
            <span className={`${styles.time}`}>06:30</span>
          </div>
        ))}
      </div>
      <div className={`${styles.tasks}`}>
        <span className={`${styles.taskTitle}`}>Daily</span>
        {list.tasks.map((task, i) => (
          <div key={i} className="flex m-[1px] items-center">
            <span className={`${styles.checkBox}`}></span>
            <span className={`${styles.task}`}>{task}</span>
            <span className={`${styles.time}`}>06:30</span>
          </div>
        ))}
      </div>
      <div className={`${styles.tasks}`}>
        <span className={`${styles.taskTitle}`}>weekly</span>
        {list.tasks.map((task, i) => (
          <div key={i} className="flex m-[1px] items-center">
            <span className={`${styles.checkBox}`}></span>
            <span className={`${styles.task}`}>{task}</span>
            <span className={`${styles.time}`}>06:30</span>
          </div>
        ))}
      </div>
      <div className={`${styles.tasks}`}>
        <span className={`${styles.taskTitle}`}>monthly</span>
        {list.tasks.map((task, i) => (
          <div key={i} className="flex m-[1px] items-center">
            <span className={`${styles.checkBox}`}></span>
            <span className={`${styles.task}`}>{task}</span>
            <span className={`${styles.time}`}>06:30</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
