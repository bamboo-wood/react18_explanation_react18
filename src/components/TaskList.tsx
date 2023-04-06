import { memo, useDeferredValue } from "react";
import type { Task } from "./Transition";

type Props = {
  tasks: Array<Task>;
};

export const TaskList = memo((props: Props) => {
  const { tasks } = props;
  const deferredTaskList = useDeferredValue(tasks);
  return (
    <>
      {deferredTaskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: "300px",
            margin: "auto",
            background: "lavender",
          }}
        >
          <p>{task.title}</p>
          <p>{task.assignee}</p>
        </div>
      ))}
    </>
  );
});
