
import './App.css';

function App() {
  const names =["Alex","Aliya","Omer","Fiza","Peter"];
    return (
    <div className="App">
      {names.map((name) => {
        return <h1 > {name}</h1>
      })}
      </div>
    );
 
   
}

export default App;
