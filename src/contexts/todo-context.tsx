import { ReactNode, createContext, useState } from "react";
import { nanoid } from "nanoid";

interface ITodo {
  id: string;
  text: string;
}

type TodoState = Array<ITodo>;

interface ITodoContext {
  todos: TodoState;
  addTodo: (text: string) => void;
  getTodos: () => ITodo[] | [];
  deleteTodo: (id: string) => void;
}
interface TodoProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<ITodoContext | null>(null);

function TodoProvider(props: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoState>([]);

  const addTodo = (text: string) => {
    setTodos((prev: TodoState) => {
      return [
        ...prev,
        {
          id: nanoid(),
          text,
        },
      ];
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((prev: TodoState) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const getTodos = (): ITodo[] | [] => {
    return todos;
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        getTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
