import { useReducer } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleTaskChanged(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }
  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        taskChanged={handleTaskChanged}
        taskDeleted={handleDeleteTask}
      />
    </>
  );
}
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: action.done,
        },
      ];
    }
    case "changed": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted":
      {
        return tasks.filter((task) => task.id !== action.id);
      }
      defult: {
        Error("unknown action type" + action.type);
      }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
