import React from 'react'
import { ITask } from '../Interfaces'
interface Props {
  task: ITask,
  completeTask(taskToDelete:string): void
}
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div>
      <div className="task">
        <div className="content">
          <span>{task.taskName}</span>
          <span>{task.deadline}</span>
          <button onClick={ ()=> { 
            completeTask(task.taskName);
          }}>X</button>
        </div>
      </div>
    </div>
  )
}

export default TodoTask
