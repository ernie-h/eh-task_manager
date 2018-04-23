
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderLayout from './Components/HeaderLayout';

class HomeLayout extends Component {
  render() {
    return (
      <ScrollView>
        <HeaderLayout />
      </ScrollView>
    );
  }
}

export default HomeLayout;
