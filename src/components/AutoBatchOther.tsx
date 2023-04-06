import { useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const AutoBatchOther = () => {
  console.log("AutoBatchOther");

  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [isFinishApi, setIsFinishApi] = useState<boolean>(false);

  const onClickExecuteApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setIsFinishApi(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <p>AutoBatchOther</p>
      <button onClick={onClickExecuteApi}>API</button>
      <p>isFinishApi: {isFinishApi.toString()}</p>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.id}: {todo.title}
        </p>
      ))}
    </div>
  );
};
