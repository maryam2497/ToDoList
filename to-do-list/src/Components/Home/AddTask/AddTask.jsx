import React, { Component } from 'react';

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
    // onAddTask ka function home se receive kiya hai as props
    this.props.onAddTask(this.state.taskName);
    this.setState({ taskName: '' });
    
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.taskName}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTask}>Add Task</button>
      </div>
    );
  }
}

export default AddTask;
