"use client";

import { useState } from "react";
import Modal from "./Components/Modal";
import Header from "./Components/Header";
import Today from './Components/Today/Today'
import Daily from './Components/Daily/Daily'
import Weekly from "./Components/Weekly/Weekly";
import Monthly from "./Components/Monthly/Monthly";
import styles from "public/css/Todo.module.css";

const todo = () => {
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
                <span>today</span>
                <button onClick={handleShowModal}>﹢</button>
              </div>
              <Today />
            </div>
            <div className={`w-6/12 h-2/4 ${styles.p1530}`}>
              <div className="w-full h-full flex justify-between mb-[10px]">
                <span>daily</span>
              </div>
              <Daily />
            </div>
          </div>
          <div className="w-full h-2/4 flex justify-start">
            <div className={`w-6/12 h-full ${styles.p1530}`}>
              <div className="w-full h-full flex justify-between mb-[10px]">
                <span>weekly</span>
              </div>
              <Weekly />
            </div>
            <div className={`w-6/12 h-2/4 ${styles.p1530}`}>
              <div className="w-full h-full flex justify-between mb-[10px]">
                <span>monthly</span>
              </div>
              <Monthly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default todo;
