
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderLayout from './Components/Layouts/HeaderLayout';
import AddTaskLayout from './Components/Layouts/AddTaskLayout';

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
