import { useCallback, useState } from "react";
import { Avatar } from "./Avatar";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assignee: string;
};

type Member = {
  [key: string]: string;
};

const member: Member = {
  a: "A",
  b: "B",
  c: "C",
};

const generateDummyTasks = (): Array<Task> => {
  return Array(10000)
    .fill("")
    .map((_, index) => ({
      id: index,
      title: `Task ${index}`,
      assignee: member[Object.keys(member)[Math.floor(Math.random() * 3)]],
    }));
};

const tasks = generateDummyTasks();

const fillteringAssignee = (assignee: string) => {
  if (assignee === "") return tasks;
  return tasks.filter((task) => task.assignee === assignee);
};

export const Transition = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>("a");
  const [tasks, setTasks] = useState<Array<Task>>(generateDummyTasks());
  const [isShow, setIsShow] = useState<boolean>(false);

  const onClickAssignee = useCallback((assignee: string) => {
    setSelectedAssignee(assignee);
    setTasks(fillteringAssignee(assignee));
  }, []);

  return (
    <div>
      <p>Transition</p>
      <div
        style={{ display: "flex", justifyContent: "center", columnGap: "20px" }}
      >
        <Avatar isSelected={selectedAssignee === "A"} onClick={onClickAssignee}>
          A
        </Avatar>
        <Avatar isSelected={selectedAssignee === "B"} onClick={onClickAssignee}>
          B
        </Avatar>
        <Avatar isSelected={selectedAssignee === "C"} onClick={onClickAssignee}>
          C
        </Avatar>
      </div>
      <button onClick={() => onClickAssignee("")} style={{ marginTop: "10px" }}>
        Reset
      </button>
      <br />
      <button onClick={() => setIsShow(!isShow)} style={{ marginTop: "10px" }}>
        Display
      </button>
      {isShow && <TaskList tasks={tasks} />}
    </div>
  );
};
