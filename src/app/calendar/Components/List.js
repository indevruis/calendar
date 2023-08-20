import dayjs from "dayjs";
import styles from "/public/List.module.css";

const List = ({ list }) => {
  const nowDate = dayjs(list.date).format("YYYY.MM.DD");
  return (
    <div className={`${styles.background}`}>
      <div className={`${styles.clickedDay}`}>{nowDate}</div>
      <div className={`${styles.tasks}`}>
        {list.tasks.map((task, i) => (
          <div key={i} className="task">
            {task}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
