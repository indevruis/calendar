import dayjs from "dayjs";
import styles from "/public/css/List.module.css";

const List = ({ list }) => {
  const nowDate = dayjs(list.date).format("YYYY.MM.DD");
  return (
    <div className={`${styles.background}`}>
      <div className={`${styles.clickedDay}`}>{nowDate}</div>
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
