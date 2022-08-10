import { ReactNode, createContext, useState } from "react";

interface ITodo {
  id: string;
  text: string;
}

type TodoState = Array<ITodo>;

interface ITodoContext {
  todos: TodoState;
  addTodo: (text: string) => void;
  getTodos: () => ITodo[] | [];
  updateTodo: (id: string, text: string) => void;
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
          id: `${todos.length}`,
          text,
        },
      ];
    });
  };

  const updateTodo = (id: string, text: string) => {};

  const deleteTodo = (id: string) => {};

  const getTodos = (): ITodo[] | [] => {
    return todos;
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        getTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
