
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
    return (
      <User name={user.name} age= {user.age}/>
    )
    })}
    </div>
  );
}

const User = (props) => {
  return (
  <div> 
  {props.name}
  {props.age}  
  </div> 
  );
}
export default App;
