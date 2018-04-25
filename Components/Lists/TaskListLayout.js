import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const TaskListWrapper = styled.View`
`;

const TaskList = styled.FlatList`
  paddingTop: 10px;
  marginRight: 50px;
  width: 200px;
`;

const Task = styled.Text`
  padding: 10px;
  color: #355C7D;
  backgroundColor: #F8B195;
  fontSize: 15px;

`;

class TaskListLayout extends Component {
  render() {
    return (
      <TaskListWrapper>
        <TaskList
          data={this.props.tasks}
          renderItem={({ item }) => <Task key={item.id}> {item} </Task>}
          keyExtractor={({ index }) => index}
        />
      </TaskListWrapper>
    );
  }
}

TaskListLayout.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskListLayout;
