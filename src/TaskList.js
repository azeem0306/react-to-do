const TaskList = ({tasks, handleDelete}) => {
    return ( 
        <div className="content">
        <h1>To Do List</h1>
        {tasks.map(task => (
          <div className="task" key={task.id}>
            <p>{task.task}</p>
            <div>
              <button>Update</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </div>
  
        ))}
      </div>
     );
}
 
export default TaskList;