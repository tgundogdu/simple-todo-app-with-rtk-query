import { Button } from "../";
import "./taskitem.scss";

const TaskItem = ({ data, onUpdate, onDelete }) => {
  return (
    <div className="v-task-row">
      <div className="v-col">
        <input type="checkbox" checked={data.completed} onChange={onUpdate} />
      </div>
      <div className={`v-col ${data.completed ? "completed" : ""}`}>
        {data.title}
      </div>
      <div className="v-col">
        <Button onClick={onDelete} size="small" appearance="danger">
          Delete
        </Button>
      </div>
    </div>
  );
};
export default TaskItem;