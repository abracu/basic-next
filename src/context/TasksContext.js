"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  
  // Obtenemos datos del LocalStorage
  useEffect(() => {
    const item = localStorage.getItem("tasks");
    const tasks = JSON.parse(item);
    if (tasks.length > 0) {
      setTasks(tasks);
    }
  }, []);

  // Guardamos datos en el LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (title, description) => {
    setTasks([...tasks, { id: uuid(), title, description }]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const updateTask = (id, newData) => {
    setTasks([
      ...tasks.map((task) => 
      task.id === id ? { ...task, ...newData} : task
      ),
    ]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
