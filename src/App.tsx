import { useTodo } from "./hooks/useTodo";
import "./App.css";
import { useState } from "react";

function AddTodoForm() {
  const [todoText, setTodoText] = useState<string>("");
  const { addTodo } = useTodo();
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoText);
  };
  return (
    <form onSubmit={handleAddTodo}>
      <input
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a todo..."
        name="todo"
        id="todo"
      />
      <button type="submit">Add Me</button>
    </form>
  );
}

function TodoList() {
  const { getTodos } = useTodo();
  return (
    <>
      {getTodos().map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
