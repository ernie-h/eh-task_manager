import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import TaskListLayout from '../Lists/TaskListLayout';

const AddTask = styled.TextInput`
  padding: 10px;
  color: #f8b195;
  background: #c06c84;
  fontSize: 15px;
  height: 50px;
  width: 295px;
`;

const AddTaskWrapper = styled.View`
  padding-top: 10px;
  marginLeft: 40px;
  alignItems: flex-start;
`;

class AddTaskLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  update() {
    this.props.tasks.push(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <AddTaskWrapper>
        <AddTask
          placeholder="Add task..."
          value={this.state.task}
          onChangeText={(task) => this.setState({ task })}
          onSubmitEditing={() => this.update()}
        />
        <TaskListLayout
          tasks={this.props.tasks}
        />
      </AddTaskWrapper>);
  }
}

AddTaskLayout.propTypes = {
  tasks: PropTypes.array,
};

AddTaskLayout.defaultProps = {
  tasks: []
};

export default AddTaskLayout;
