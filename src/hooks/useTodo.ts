import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("Oops! context is undefined");
  }
  return ctx;
}
