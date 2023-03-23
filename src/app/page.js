"use client";
import { useTasks } from "../context/TasksContext";
import {TaskCard} from "../components/TaskCard";

function Page() {
  const { tasks } = useTasks();
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default Page;
