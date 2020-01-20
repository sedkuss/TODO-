import React, { Component } from 'react'

class Todo extends Component {

    // on commence //today
  constructor(props) {
    super(props);
    this.state = {
        idToEdit: '',
        taskToEdit: '',
        taskFromInput: ''
    };
  }

    handleChange = (event) => {
        this.setState({
            idToEdit: event.target.getAttribute("data-id"),
            taskToEdit: event.target.textContent
        });
    }
    
    handleInputChange = (event) => {
        this.setState({
            taskFromInput: event.target.value,
        }); 
    }

    handleSendEdit = () => {
        this.props.handleClickEdit(this.state.idToEdit,this.state.taskToEdit)
    }

    handleSendAdd = () => {
        this.setState({
            taskFromInput: ''
        }); 
        this.props.handleClickAdd(this.state.taskFromInput)
    }

    render() {
        const { tasks } = this.props
        return (
            <div className='container'>
                <div className='task-input'>
                    <h1 className='title'>TO-DO APP</h1>
                    <span style={{ float: 'right' }}>Add New Todo</span>
                    <input className='input-inner' 
                    onChange={this.handleInputChange}
                    type='text' value={this.state.taskFromInput} />
                    <button className="btn btn-primary" onClick={this.handleSendAdd}>ADD</button>
                </div>
                <div>
                    <ul>
                        {tasks.map((el,i) => {
                            return <li>
                        <p contenteditable="true"
                        data-id={i}
                        onInput={this.handleChange}
                        style={{color:"red", textDecoration: (el.isDone) ? "line-through" : "" }}>
                            {el.task}
                        </p>
                                <button onClick={this.handleSendEdit}>Edit</button>
                                <button onClick={()=>this.props.handleClickComplite(i)}>complite</button>
                                <button  onClick={()=>this.props.handleClickDelete(i)}>delete</button>

                            </li>
                        })}


                    </ul>

                </div>
            </div>
        )
    }
}
export default Todo