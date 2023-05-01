import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  state = {
    // checkbox bolean variable
    isChecked: false
  };
  // checkbox
  handleCheckboxChange = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }));
  };

  handleDeleteTask = () => {
    this.props.onDeleteTask(this.props.taskName);
  };
  render() {
    const { taskName } = this.props;
    return (
      <div className="task">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleCheckboxChange}
        />
        <label style={{ textDecoration: this.state.isChecked ? 'line-through' : 'none' }}>
          {taskName}
        </label>
        <button className="delete-button" onClick={this.handleDeleteTask}>Delete</button>

      </div>
    );
  }
}

export default Task;
