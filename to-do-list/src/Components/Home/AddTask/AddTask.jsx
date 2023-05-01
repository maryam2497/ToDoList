import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
  state = {
    taskName: ''
  };

  handleInputChange = event => {
    this.setState({ taskName: event.target.value });
  };

  handleAddTask = () => {
    if (!this.state.taskName) {
      alert('Empty task name can not be added to the list...');
      return;
    }
    this.props.onAddTask(this.state.taskName);
    this.setState({ taskName: '' });
    
  };

  render() {
    return (
      <div>
        <input className='txtInput'
          type="text"
          value={this.state.taskName}
          onChange={this.handleInputChange}
        />
        <button className='btn addButton' onClick={this.handleAddTask}>Add Task</button>
      </div>
    );
  }
}

export default AddTask;
