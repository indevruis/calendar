import TodayTodo from './TodayTodo'

const Today = () => {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[70px]">제목</th>
          <th className="w-[279px]">할일</th>
        </tr>
      </thead>
      <tbody>
        <TodayTodo />
      </tbody>
    </table>
  );
};

export default Today;
