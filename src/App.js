
import './App.css';

function App() {
  const age =5
  const isGreen = true
    return (
    <div className="App">
      {age >=18 ? <h1>Over age</h1> : <h1>Under age</h1>}
      <h1 style={{color: isGreen ? "green" : "orange"}}>This display color</h1>
      {isGreen && <button>Green-Button</button>}
      </div>
    );
 
   
}

export default App;
