import React from 'react';

class TodoForm extends React.Component {
    //constructor with state
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
    }


    handleChanges = e => {
        //update state with each keystroke
        console.log('el: TodoForm.js : handleChanges: e.target.value: ', e.target.value)
        this.setState({todo: e.target.value}) 
        //this.setState({[e.target.name]: e.target.value})    Also works!
    }

    //class property to submit form 
    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTodo(this.state.todos)
        console.log('Submitted bitch')
    }



    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                

                {/*this is an uncontrolled component*/}
                     
                    <label > Enter A Task To Complete
                        <input
                            
                            placeholder = '      Enter task here    '
                            type = 'text'
                            name = 'todo'
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