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
    if (newTask.trim().length > 0) {
      addTask({ title: newTask, completed: false });
      setNewTask("");
    } else {
      setInputValidation({
        error: true,
        errorMessage: "Task cannot be empty.",
      });
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
