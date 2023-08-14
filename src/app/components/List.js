import dayjs from "dayjs";
import "/public/List.css";

export default function List({ list }) {
  const nowDate = dayjs(list.date).format("YYYY.MM.DD");
  return (
    <div className="list-background">
      <div className="clicked-day">{nowDate}</div>
      <div className="tasks">
        {list.tasks.map((task, i) => (
          <div key={i} className="task">
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}
