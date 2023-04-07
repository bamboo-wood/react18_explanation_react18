import { Sidebar } from "./Sidebar";
import { AlbumList } from "./AlbunList";
import { TodoList } from "./TodoList";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, useState, useTransition } from "react";

type Tabs = "album" | "todo";

export const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("todo");
  const [isPending, startTransition] = useTransition();

  const onClickTabButton = (tab: Tabs) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };

  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "none",
    opacity: isPending ? 0.5 : 1,
  };
  const albumButtonStyle = {
    ...buttonStyle,
    background: selectedTab === "album" ? "gray" : "white",
  };
  const todoButtonStyle = {
    ...buttonStyle,
    background: selectedTab === "todo" ? "gray" : "white",
  };

  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <button
          style={albumButtonStyle}
          onClick={() => onClickTabButton("album")}
        >
          Album
        </button>
        <button
          style={todoButtonStyle}
          onClick={() => onClickTabButton("todo")}
        >
          Todo
        </button>

        <ErrorBoundary fallback={<div>Error!</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            {selectedTab === "todo" ? <TodoList /> : <AlbumList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
