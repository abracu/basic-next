"use client";
import { createContext, useContext, useState } from "react";
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
  const [tasks, setTasks] =  useState([
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
    { id: 3, title: "Task 3", description: "Description 3" }
  ]);

  const createTask = (title, description) => {
    setTasks([...tasks, { id: uuid(), title, description }])
  };

  return (
    <TasksContext.Provider value={{ tasks, createTask:createTask }}>{children}</TasksContext.Provider>
  );
};
