import ToDoListButton from "./ToDoListButton"
function ToDoList(props) {
  props.tasks.sort((a, b) => b.id - a.id)
  return (
    <div className="wrapper">
  <ul>
    {
      props.tasks.map((task) => {
        let radioCompleted = '';
        let classCompleted = '';
        if (task.completed == false) {
          radioCompleted = '◻️';
        } else {
          radioCompleted = '✅';
          classCompleted = 'strike';
        }
        
        return (
          <li key={task.id}>
            <div className='left'><button onClick={()=>props.setCompleted(task.id)}>{radioCompleted}</button></div>
            <div className={`center ${classCompleted}`}>{task.task}</div>
            <div className='right'>
                <ToDoListButton id={task.id} tasks={props.tasks} move={props.move} remove={props.remove} />
            </div>
          </li>
        )
      })
    }
  </ul>
</div>
  )
}

export default ToDoList
