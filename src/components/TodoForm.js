import React from 'react';

class TodoForm extends React.Component {
    //constructor with state
    constructor(){
        super();
        this.state = {
            todo: ''
        }
    }


    handleChanges = e => {
        //update state with each keystroke
        console.log('el: TodoForm.js : handleChanges: e.target.value: ', e.target.value)
        this.setState({todo: e.target.value})
        
    }

    //class property to submit form

    render(){
        return(
            <form>
                

                {/*this is an uncontrolled component*/}
                     
                    <label > Enter A Task To Complete
                        <input
                            
                            placeholder = '      Enter task here    '
                            type = 'text'
                            name = 'item'
                            value = {this.state.todo}
                            onChange = {this.handleChanges}
                        />  
                    </label>

                    <button className = 'add-task-btn' >Add Task</button>
            </form>
        )
    }
}

export default TodoForm;