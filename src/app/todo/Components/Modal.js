import Checkbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "public/css/Modal.module.css";
import { useState } from "react";

const Modal = ({ setModal }) => {
  const [cycle, setCycle] = useState([]);
  const hanldeCloseModal = () => {
    setModal(false);
  };

  return (
    <div className={`${styles.background} flex items-center justify-center`}>
      <div className={`${styles.modal} `}>
        <FontAwesomeIcon
          icon={faX}
          className={`${styles.outBtn}`}
          onClick={hanldeCloseModal}
        />
        <form className="pt-[30px]">
          <div>
            <input
              placeholder="todo 템플릿"
              className={`${styles.todoInput}`}
              autoFocus
            />
          </div>
          <div className={`${styles.inputBox} flex items-center`}>
            <span className={`${styles.inputField} w-[140px]`}>계획 날짜</span>
            <input type="date" className={`${styles.inputField} w-[119px]`} />
          </div>
          <div className={`${styles.inputBox} flex items-center`}>
            <span className="w-[140px]">시간</span>
            <input type="time" className={`${styles.inputField} w-[120px]`} />
          </div>
          <div className={`${styles.inputBox} flex items-center`}>
            <span className="w-[140px]">중요도</span>
            <input
              placeholder="비어있음"
              className={`${styles.sequence} ${styles.inputField}`}
            />
          </div>
          <div className={`${styles.inputBox} flex items-center`}>
            <span className="w-[140px]">주기 설정</span>
            <CheckboxGroup values={cycle} onChange={setCycle}> 
              <Checkbox value="daily">Daily</Checkbox>
              <Checkbox value="weekly">Weekly</Checkbox>
              <Checkbox value="monthly">Monthly</Checkbox>
            </CheckboxGroup>
          </div>
          <div className="relative">
            <textarea
              className={`${styles.textarea}`}
              placeholder="Enter키를 눌러 빈 페이지로 시작하세요!"
            />
            <button className={`${styles.submitBtn}`}>발행</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
