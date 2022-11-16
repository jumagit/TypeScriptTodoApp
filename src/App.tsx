import React, { FC, useState, ChangeEvent } from 'react'
import './App.css'
import { ITask } from './Interfaces'
import TodoTask from './components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      let deadline = Number(event.target.value)
      setDeadline(deadline)
    }
  }

  const addTodo = (): void => {
    let newTask = {
      taskName: task,
      deadline: deadline,
    }
    setTodoList([...todoList, newTask])  
    setTask("")
    setDeadline(0)
  }


  const completeTask = (taskNameToDelete: string): void => {

    setTodoList(todoList.filter((todo) => todo.taskName !== taskNameToDelete))

  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            id=""
            placeholder="Task..."
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            id=""
            value={deadline}
            placeholder="Deadline in Days "
            onChange={handleChange}
          />
        </div>
        <button onClick={addTodo}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task:ITask,key:number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  )
}

export default App
