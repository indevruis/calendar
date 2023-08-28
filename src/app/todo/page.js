"use client";

import { useMemo, useState } from "react";
import Modal from "./Components/Modal";
import Header from "./Components/Todo/Header";
import Table from "./Components/Table";
import styles from "public/css/Todo.module.css";

const todo = () => {
  const columns = useMemo(
    () => [
      { accessor: "check", Header: "Check" },
      { accessor: "todo", Header: "Todo" },
      { accessor: "time", Header: "Time" },
    ],
    []
  );
  const data = useMemo(
    () =>
      Array(7)
        .fill()
        .map(() => ({
          check: false,
          todo: "할일",
          time: "시간",
        })),
    []
  );
  const [modal, setModal] = useState(false);

  const handleShowModal = () => {
    setModal(true);
  };
  return (
    <div className="w-full h-full flex justify-center">
      {modal && <Modal setModal={setModal} />}
      <div className={`${styles.background}`}>
        <Header />
        <div className="w-full flex flex-col">
          <div className="w-full h-2/4 flex justify-start">
            <div className={`w-6/12 h-full ${styles.p1530}`}>
              <div className="w-full h-full flex justify-between mb-[10px]">
                <span>weekly</span>
                <button onClick={handleShowModal}>﹢</button>
              </div>
              <Table columns={columns} data={data} />
            </div>
            <div className={`w-6/12 h-2/4 ${styles.p1530}`}>
              <div className="w-full h-full flex justify-between mb-[10px]">
                <span>monthly</span>
                <button onClick={handleShowModal}>﹢</button>
              </div>
              <Table columns={columns} data={data} />
            </div>
          </div>
          <div className={`w-full h-2/4 ${styles.p1530}`}>
            <div className="w-full h-full flex justify-between mb-[10px]">
              <span>daily</span>
              <button onClick={handleShowModal}>﹢</button>
            </div>
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default todo;
