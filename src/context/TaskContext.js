"use client";
import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
    { id: 3, title: "Task 3", description: "Description 3" }
  ];

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
