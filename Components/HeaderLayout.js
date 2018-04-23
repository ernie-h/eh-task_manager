import React from 'react';
import styled from 'styled-components';

const Header = styled.Text`
  padding: 10px;
  color: palevioletred;
  background: papayawhip;
  fontSize: 30px;

`;

const HeaderWrapper = styled.View`
  padding-top: 50px;
  height: 100%;
  width: 100%;

  alignItems: center;
`;

const HeaderLayout = () => (
  <HeaderWrapper>
    <Header> Ernie's Task Manager </Header>
  </HeaderWrapper>
);

export default HeaderLayout;
