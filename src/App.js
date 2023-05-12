import "./App.css";
import BoxList from "./ColorBox/BoxList";
import TodoList from "./Todo/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">App</header>
      <div className="App-content">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
