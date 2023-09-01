import { useState } from "react";
import MonthlyTodo from "./MonthlyTodo";

const Monthly = () => {
  const [monthlyTodoList, setMonthlyTodoList] = useState([{title: '1', content: 'd'},{title: '2', content: 'd'}])
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[100px] font-medium">제목</th>
          <th className="w-[319px] font-medium">할일</th>
        </tr>
      </thead>
      <tbody>
        {monthlyTodoList.map((todo, index)=>(
          <MonthlyTodo key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Monthly;
