import React from "react";


function TaskList({ tasks, onTaskDelete }) {
  const taskElements = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDelete={onTaskDelete}
    />
  ));
  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
