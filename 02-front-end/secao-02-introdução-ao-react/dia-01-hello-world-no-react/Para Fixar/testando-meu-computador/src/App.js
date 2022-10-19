import './App.scss';
import ToDoList from './ToDoList';
import Hello from './HelloWorld'

const TextJSX = <h1>Hello, JSX</h1>;

const App = () => {

  return (
    <>
    <div>
      <ToDoList />
    </div>
      <Hello />
    </>
  );
}

export default App;
