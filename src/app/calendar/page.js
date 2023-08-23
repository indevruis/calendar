"use client";

import { useState } from "react";
import Navbar from "../Components/Navbar";
import Calendar from "./Components/CalenderContent";
import List from "./Components/List";

const calendar = () => {
  const [list, setList] = useState({
    date: "",
    isOpen: false,
    tasks: ["할일1", "할일2"],
  });

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-full flex justify-center items-center pt-[65px]">
        <Calendar list={list} setList={setList} />
        {list.isOpen && <List list={list} />}
      </div>
    </div>
  );
};

export default calendar;
