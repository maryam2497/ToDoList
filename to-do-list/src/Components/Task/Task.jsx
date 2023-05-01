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
      <div className='transbox2'>
      <div className='flexbox2'>
        <input
          type="checkbox" class="largerCheckbox"
          checked={this.state.isChecked}
          onChange={this.handleCheckboxChange}
        />
        <label className='taskNamee' style={{ textDecoration: this.state.isChecked ? 'line-through' : 'none' }}>
          {taskName}
        </label></div>
        <button id='border'  className="btn delButton" onClick={this.handleDeleteTask}>Delete</button>

      </div>
    );
  }
}

export default Task;
