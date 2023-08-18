
import './App.css';

function App() {
  const users =[
    {name:"Alex", age:26},
    {name: "Adam",age:28},
    {name:"Fida",age: 43},
  ];


  return (
    <div className="App">
    {users.map((user,key) => {
    return <div> 
      <h1>name={user.name}</h1>
      <h1>age={user.age}</h1>  
      </div>
    })}
    </div>
  );


   
}

export default App;
