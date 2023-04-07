import { Sidebar } from "./Sidebar";
import { AlbumList } from "./AlbunList";
import { TodoList } from "./TodoList";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export const ReactQuery = () => {
  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <ErrorBoundary fallback={<div>Error!</div>}>
          <Suspense fallback={<div>Albums Loading...</div>}>
            <AlbumList />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Error!</div>}>
          <Suspense fallback={<div>Todos Loading...</div>}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
