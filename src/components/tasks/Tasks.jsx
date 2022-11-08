import { useState } from "react";
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../features/apiSlice";
import { TaskItem, Confirmation } from "../";

const Tasks = () => {
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();

  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const deleteTaskHandler = () => {
    deleteTask(deleteTaskId);
    setDeleteTaskId(null);
  };

  return (
    <>
      <div className="tasks">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>{error}</p>
        ) : isSuccess ? (
          tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                data={task}
                onUpdate={() =>
                  updateTask({ ...task, completed: !task.completed })
                }
                onDelete={() => setDeleteTaskId({ id: task.id })}
              />
            );
          })
        ) : (
          ""
        )}
      </div>

      {deleteTaskId ? (
        <Confirmation
          title="Delete"
          msg="Are you sure want to delete this task?"
          onClose={() => setDeleteTaskId(null)}
          onConfirm={deleteTaskHandler}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Tasks;
