import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import TaskListLayout from '../Lists/TaskListLayout';

const AddTask = styled.TextInput`
  borderRadius: 5px;
  padding: 10px;
  color: #f8b195;
  background: #c06c84;
  fontSize: 15px;
  height: 50px;
  width: 295px;
`;

const AddTaskWrapper = styled.View`
  padding-top: 20px;
  marginLeft: 40px;
  alignItems: flex-start;
`;

const TaskListWrapper = styled.View`
  paddingTop: 13px;
  marginRight: 50px;
  width: 200px;
`;

class AddTaskLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: []
    };
  }

  onSubmitEditing() {
    this.state.tasks.push(this.state.task);
    this.setState({ task: '' });
  }

  deleteItem = (item, tasks) => {
    tasks.filter(f => f === item);
    this.setState({ tasks });
  }

  render() {
    return (
      <AddTaskWrapper>
        <AddTask
          placeholder="Add clutt..."
          value={this.state.task}
          onChangeText={(task) => this.setState({ task })}
          onSubmitEditing={() => this.onSubmitEditing()}
        />
        <TaskListWrapper>
          <TaskListLayout
            tasks={this.state.tasks}
            deleteItem={this.deleteItem}
          />
        </TaskListWrapper>
      </AddTaskWrapper>);
  }
}


export default AddTaskLayout;
