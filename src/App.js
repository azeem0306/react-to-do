import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function App() {

  const [tasks, setTasks] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/tasks')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setTasks(data);
      })
    }, 1000);
  }, [])

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {tasks && <TaskList tasks={tasks} handleDelete={handleDelete}/>}
    </div>
  );
}


export default App;
