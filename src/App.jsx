import { useRef } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
function App() {
  const newTask = useRef('');
  function addTask(event) {
    event.preventDefault();
    console.log('saya diklik isi ${newTask.current.value}');
  }
  return (

    <>
      <Form addTask={addTask} newTask={newTask} />
      <ToDoList />
    </>

  )
}

export default App
