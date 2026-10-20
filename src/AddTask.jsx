import { useState } from "react";

export default function AddTask(onAddtask) {
  const [text, setText] = useState('');
  function handleclick() {
    setText("");
    onAddtask(text);
  }

  return (
    <section>
      <input
        placeholder="add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={handleclick}>add a task</button>
    </section>
  );
}
