import { TaskList } from './components/TaskList.jsx';
import './App.css';


function App() {

  const tasks = [];

  return (
    <>
      <TaskList array={tasks} />
    </>
  )
}

export default App
