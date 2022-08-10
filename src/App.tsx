import { useTodo } from "./hooks/useTodo";
import { useState } from "react";
import "./App.css";

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

interface TodoItemProps {
  id: string;
  text: string;
}

function TodoItem({ id, text }: TodoItemProps) {
  const { deleteTodo } = useTodo();
  return (
    <div className="todo-item">
      <div className="todo-text">{text}</div>
      <button onClick={() => deleteTodo(id)}>x</button>
    </div>
  );
}

function TodoList() {
  const { getTodos } = useTodo();
  return (
    <>
      {getTodos().map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text}></TodoItem>
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
