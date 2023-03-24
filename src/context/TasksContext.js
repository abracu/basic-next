"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
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
 
  const [tasks, setTasks] = useLocalStorage("tasks", []);

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
