import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [catSelected, setCatSelected] = useState("All")
  const [taskData, setTaskData] = useState(TASKS)

  function onTaskFormSubmit(newTask) {
    setTaskData([...taskData, newTask])
  }

  function handleClick(text) {
    setTaskData(taskData.filter(task => task.text === text ? false : true))
  }
  const tasksToDisplay = taskData.filter(task => {return catSelected === "All" ? true : catSelected === task.category})
  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} catSelected={catSelected} setCatSelected={setCatSelected} />
      <NewTaskForm categories={ CATEGORIES } onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} handleClick={handleClick} />
    </div>
  );
}

export default App;
