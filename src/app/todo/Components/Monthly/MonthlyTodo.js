import styles from "public/css/MonthlyTodo.module.css";

const MonthlyTodo = () => {
  return (
    <tr>
      <td>
      <input type="text" className={`${styles.title}`} />
      </td>
      <td className={`${""}`}>
        <input type="text" className={`${styles.content}`} />
      </td>
    </tr>
  );
};

export default MonthlyTodo;
