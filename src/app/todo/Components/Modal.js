"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "public/css/Modal.module.css";
import { useState } from "react";

const Modal = ({ setModal }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [importance, setImportance] = useState("");
  const [memo, setMemo] = useState("");

  const handleCloseModal = (e) => {
    setModal(false);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  const handleChangeImportance = (e) => {
    setImportance(e.target.value);
  };
  const handleChangeMemo = (e) => {
    setMemo(e.target.value);
  };

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/todos/postToday", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          date: date,
          time: time,
          importance: importance,
          memo: memo,
        }),
      });
      if (response.status === 302) {
        window.location.href = "/todo";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`${styles.background} flex items-center justify-center`}>
      <div className={`${styles.modal} `}>
        <FontAwesomeIcon
          icon={faX}
          className={`${styles.outBtn}`}
          onClick={handleCloseModal}
        />
        <form className="pt-[30px]" onSubmit={handleSubmitBtn}>
          <div>
            <input
              placeholder="todo 템플릿"
              className={`${styles.todoInput}`}
              autoFocus
              onChange={handleChangeTitle}
              name="title"
            />
          </div>
          <div className={`${styles.inputBox} flex items-center`}>
            <span className={`${styles.inputField} w-[140px]`}>계획 날짜</span>
            <input
              type="date"
              className={`${styles.inputField} w-[119px]`}
              onChange={handleChangeDate}
              name="date"
            />
          </div>
          <div className={`${styles.inputBox} flex items-center`}>
            <span className="w-[140px]">시간</span>
            <input
              type="time"
              className={`${styles.inputField} w-[120px]`}
              onChange={handleChangeTime}
              name="time"
            />
          </div>
          <div className={`${styles.inputBox} flex items-center`}>
            <span className="w-[140px]">중요도</span>
            <input
              placeholder="비어있음"
              className={`${styles.sequence} ${styles.inputField}`}
              onChange={handleChangeImportance}
              name="importance"
            />
          </div>
          <div className="relative">
            <textarea
              className={`${styles.textarea}`}
              placeholder="Enter키를 눌러 빈 페이지로 시작하세요!"
              onChange={handleChangeMemo}
              name="memo"
            />
            <button className={`${styles.submitBtn}`}>발행</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
