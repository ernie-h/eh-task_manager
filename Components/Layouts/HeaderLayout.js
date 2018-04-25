import React from 'react';
import styled from 'styled-components';

const Header = styled.Text`
  padding: 10px;
  color: #355C7D;
  fontSize: 40px;
`;

const HeaderWrapper = styled.View`
  padding-top: 50px;
  alignItems: center;
  backgroundColor: #F8B195;

`;

const HeaderLayout = () => (
  <HeaderWrapper>
    <Header> Task Manager </Header>
  </HeaderWrapper>
);

export default HeaderLayout;
