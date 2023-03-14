import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Todo } from "./components/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">TODO</span>
      <InputField todo={todo} setTodo={setTodo} todoAdd={todoAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
