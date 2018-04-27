import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const TaskList = styled.FlatList`
  borderTopLeftRadius: 15px;
  borderTopRightRadius: 50px;
  borderBottomLeftRadius: 5px;
  borderBottomRightRadius: 5px;
`;

const Task = styled.Text`
  padding: 10px;
  color: #355C7D;
  backgroundColor: #F8B195;
  fontSize: 15px;

`;

class TaskListLayout extends Component {
  renderItem(item) {
    return (
      <Task
        onPress={() => this.props.deleteItem(item, this.props.tasks)}
      >
        {item}
      </Task>);
  }

  render() {
    return (
      <TaskList
        data={this.props.tasks}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={({ index }) => index}
      />
    );
  }
}

TaskListLayout.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteItem: PropTypes.object.isRequired,
};

export default TaskListLayout;
