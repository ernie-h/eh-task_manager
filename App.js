
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderLayout from './Components/HeaderLayout';
import AddTaskLayout from './Components/AddTaskLayout';

class HomeLayout extends Component {
  render() {
    return (
      <ScrollView>
        <HeaderLayout />
        <AddTaskLayout />
      </ScrollView>
    );
  }
}

export default HomeLayout;
