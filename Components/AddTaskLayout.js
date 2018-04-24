import React, { Component } from 'react';
import styled from 'styled-components';

const AddTask = styled.TextInput`
  padding: 10px;
  color: #f8b195;
  background: #c06c84;
  fontSize: 15px;
  height: 50px;
  width: 250px;
`;

const AddTaskWrapper = styled.View`
  alignItems: center;
`;

const AddedTask = styled.Text`
  color: palevioletred;
  fontSize: 10px;
`;

class AddTaskLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  render() {
    return (
      <AddTaskWrapper>
        <AddTask
          placeholder="Add task..."
          onChangeText={(task) => this.setState({ task })}
          value={this.state.task}
        />
        <AddedTask>
          {this.state.task}
        </AddedTask>
      </AddTaskWrapper>);
  }
}

export default AddTaskLayout;
