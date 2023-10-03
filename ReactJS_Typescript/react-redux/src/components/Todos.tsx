import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoInterface } from "../redux/types";

export const Todos = () => {
  const todos = useSelector((store: { todos: TodoInterface[] }) => store.todos);
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>();

  const onInputChange = (e: { target: { value: string } }) =>
    setValue(e.target.value);

  const createTodo = () => {
    dispatch({
      type: "CREATE_TODO",
      payload: { id: todos.length, isDone: false, title: value },
    });

    setValue("");
  };

  const toggleTodoCompleteness = (todo: TodoInterface) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { ...todo, isDone: !todo.isDone },
    });
  };

  return (
    <div className="todos-wrapper">
      <h1>Todos</h1>
      <div className="todos-form-wrapper">
        <input
          type="text"
          placeholder="Enter todo"
          value={value}
          onChange={onInputChange}
        />
        <button onClick={createTodo}>Create todo</button>
      </div>

      {todos.map(({ id, isDone, title }) => (
        <div>
          <span>{id}</span>
          <span>{title}</span>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => toggleTodoCompleteness({ id, isDone, title })}
          />
        </div>
      ))}
    </div>
  );
};
