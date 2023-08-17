
import './App.css';

function App() {
  const name = <h1>Alex</h1>
  const age = <h1>25</h1>
  const email = <h1>alex25@gmail.com</h1>
  const user =(
    <div>
      {name}
      {age}
      {email}

    </div>

  )
  return (
    <div className="App">
      {user}
      {user}
      {user}
      {user}

      </div>
  );
}

export default App;
