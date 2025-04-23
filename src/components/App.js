import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "./data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
 
    const [tasks, setTasks] = useState(TASKS);
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    function handleCategoryChange(category) {
      setSelectedCategory(category);
    }
  
    function handleTaskDelete(textToDelete) {
      setTasks(tasks.filter((task) => task.text !== textToDelete));
    }
  
    function handleTaskFormSubmit(newTask) {
      setTasks([...tasks, newTask]);
    }
  
    const filteredTasks = tasks.filter((task) =>
      selectedCategory === "All" ? true : task.category === selectedCategory
    );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete}/>

    </div>
  );
}

export default App;
