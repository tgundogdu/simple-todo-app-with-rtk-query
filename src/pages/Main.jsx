import { useState } from "react";
import { Button, Tasks, FormInput } from "../components";
import { useAddTaskMutation } from "../features/apiSlice";

const Main = () => {
  const [newTask, setNewTask] = useState("");
  const [inputValidation, setInputValidation] = useState({
    error: false,
    errorMessage: "",
  });

  const [addTask] = useAddTaskMutation();

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (newTask.trim().length <= 0) {
      setInputValidation({
        error: true,
        errorMessage: "Task cannot be empty.",
      });
    } else if (!/^.{1,50}$/.test(newTask)) {
      setInputValidation({
        error: true,
        errorMessage: "Task shuld be max 50 charachter.",
      });
    } else if (!/^[a-zA-Z0-9 ]+$/.test(newTask)) {
      setInputValidation({
        error: true,
        errorMessage: "Only alphanumeric characters acceptable",
      });
    } else {
      addTask({ title: newTask, completed: false });
      setNewTask("");
    }
  };

  const inputChangeHandler = (e) => {
    setNewTask(e.target.value);
    setInputValidation({ error: false, errorMessage: "" });
  };

  return (
    <>
      <form onSubmit={addTaskHandler}>
        <div className="v-task-form">
          <div className="v-task-input">
            <FormInput
              errorMessage={inputValidation.errorMessage}
              error={inputValidation.error}
            >
              <input
                className="v-element"
                type="text"
                placeholder="New task"
                onChange={inputChangeHandler}
                value={newTask}
              />
            </FormInput>
          </div>
          <div className="v-task-button">
            <Button appearance="primary">Add Task</Button>
          </div>
        </div>
      </form>
      <Tasks />
    </>
  );
};

export default Main;
