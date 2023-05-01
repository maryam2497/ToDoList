import React, { Component } from 'react';
import Task from '../Task/Task';


class TaskList extends Component {
   
  
    render() {
    return (
        <div>
        {this.props.tasks.map((task, index) => (
          <Task key={index} taskName={task}
          // passing on delete function as props
          onDeleteTask={this.props.onDeleteTask} />
        ))}
      </div>
    );
  }
}

export default TaskList;
