import { useState } from "react";

export default function TaskList({ tasks, taskChanged, taskDeleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            taskChanged={taskChanged}
            taskDeleted={taskDeleted}
          />
        </li>
      ))}
    </ul>
  );
}

// ✅ Top-level — NOT nested inside TaskList
function Task({ task, taskChanged, taskDeleted }) {
  const [isEdit, setEdit] = useState(false);

  const content = isEdit ? (
    <>
      <input
        value={task.text}
        onChange={(e) => taskChanged({ ...task, text: e.target.value })}
      />
      <button onClick={() => setEdit(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setEdit(true)}>Edit</button>
    </>
  );

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => taskChanged({ ...task, done: e.target.checked })}
      />
      {content}
      <button onClick={() => taskDeleted(task.id)}>Delete</button>
    </label>
  );
}
