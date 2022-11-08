import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/apiSlice";
import Main from "./pages/Main";

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      <div className="todo-app">
        <h1>Simple Todo App</h1>
        <Main />
      </div>
    </ApiProvider>
  );
};

export default App;
