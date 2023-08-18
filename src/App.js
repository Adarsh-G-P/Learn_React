
import './App.css';

function App() {
 return (
    <div className="App">
     <User name = "ALex" age={25} email = "alex@gmail.com" />
     <User name = "Aliya" age={27} email = "aliya@gmail.com" />
     <User name = "Fariz" age={35} email = "fariz@gmail.com" />
   
    </div>
  );
}


const User = (props) => {
  return (
  <div>
   <h1>{props.name}</h1>
   <h1>{props.age}</h1>
   <h1>{props.email}</h1>
  
  </div>
  );
};

export default App;
