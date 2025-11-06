import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { useParams, useOutletContext } from "react-router-dom";

export const CardPage = () => {
  const { tasks, fetchTasks } = useOutletContext(); // получаем tasks из MainPage
  const { id } = useParams(); // получаем id из URL

  const task = tasks.find((t) => t._id === id); // ищем задачу по id

  if (!task) return <div>Задача не найдена</div>;
  return <PopBrowse task={task} onUpdate={fetchTasks} />;
};
