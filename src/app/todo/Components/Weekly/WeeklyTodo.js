import styles from "public/css/WeeklyTodo.module.css";

const WeeklyTodo = ({ weekday, todayWeek, index }) => {
  return (
    <tr>
      <td className={`${styles.day}`}>
        <span>{weekday}</span>
      </td>
      <td className={`${styles.today}`}>
        {todayWeek === index && <span>today</span>}
      </td>
      <td className={`${styles.todoBox} flex items-center`}>
        <input type="text" name={weekday} className={`${styles.todo}`} />
      </td>
    </tr>
  );
};

export default WeeklyTodo;
