
import './App.css';

function App() {
 return (
    <div className="App">
    <Job salary={90000} position="Senior SDE" company="Amazon"/>
    <Job salary={25000} position="Junior SDE" company="Google"/>
    <Job salary={50000} position="Project Manager" company="Netflix"/>
    <h1 className="name"> ABC LIMITED</h1>
    </div>
    
  );
}


const Job = (props) => {
  return (
  <div>
    <h1 className='cash'>{props.salary}</h1>
    <h2>{props.position}</h2>
    <h3>{props.company}</h3>
  
  
  </div>
  );
};

export default App;
