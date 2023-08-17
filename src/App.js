
import './App.css';

function App() {
  const name = <h1>Alex</h1>
  const age = <h1>25</h1>
  const email = <h1>alex25@gmail.com</h1>

  return (
    <div className="App">
      {name}
      {age}
      {email}
      </div>
  );
}

export default App;
