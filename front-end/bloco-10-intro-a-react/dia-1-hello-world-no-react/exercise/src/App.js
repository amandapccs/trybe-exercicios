import './App.css';
import React from 'react'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const thingsToDo = ['Acordar', 'Tomar café', 'Arrumar areia dos gatos', 'Colocar ração dos gatos', 'Estudar', 'Almoçar']

// function App() {
//   return thingsToDo.map((thing) => Task(thing));
// }

class App extends React.Component {
  render() {
    return (
      <ul>{thingsToDo.map((thing) => Task(thing))}</ul>
    )
  }
}

export default App;
