import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



const todos =  [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  { 
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },

  { 
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component { // 'C' Declare your class



  // you will need a place to store your state in this component.     check
  // design `App` to be the parent component of your application.     check
  // this component is going to take care of state, and any change handlers you need to work with your state    


  constructor() {  // 'C' Build out your constructor.
    super();
    this.state = { todos };
  }

  render() {  
    return(
      <div className = 'app-container'>

        <h2>Todo List</h2>
        <TodoList todos = {todos} />
        <TodoForm />
      </div>
    )
  }
}

export default App;
