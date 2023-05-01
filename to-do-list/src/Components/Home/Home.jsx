import React, { Component } from "react";
import TaskList from "../TaskList/TaskList";
import AddTask from "./AddTask/AddTask";
import './Home.css';

//defining task array globally
const tasks = [];
//store the key that will be used to access the task list in local storage.
const LOCAL_STORAGE_KEY = 'tasks';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }
 
  componentDidMount() {
    // retrieve the task list from local storage 
    const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    // If it exists, parse it and set the state
    if (tasks) {
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if the previous state of the task list is different from the current state store the new task list in local storage
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.tasks));
    }
  }
  //take taskname as input and set it after previous task if exist
  handleAddTask = taskName => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, taskName]
    }));
  };

  handleDeleteTask = taskName => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task !== taskName)
    }));
  };

  render() {
    return (
      <div>
        <div className="transbox">
           <p className="toDoHeading">To Do List</p>
          <AddTask 
          onAddTask={this.handleAddTask} /></div>
          <br />
          <TaskList tasks={this.state.tasks} onDeleteTask={this.handleDeleteTask} />
        </div>
    );
  }
}
