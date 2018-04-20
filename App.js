
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import styled from 'styled-components';

const Header = styled.Text`
  padding: 0.5px;
  margin: 0.5px;
  color: palevioletred;
  background: papayawhip;
  border-radius: 10px;
  fontSize: 30px;

`;

const HeaderWrapper = styled.View`
  alignSelf: center;
  padding-top: 50px;
  height: 100px;
`;

export default class HomeLayout extends Component {
  render() {
    return (
      <ScrollView>
        <HeaderWrapper>
          <Header> Ernie's Task Manager </Header>
        </HeaderWrapper>
      </ScrollView>
    );
  }
}
