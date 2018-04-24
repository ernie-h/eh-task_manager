import React from 'react';
import styled from 'styled-components';

const Header = styled.Text`
  padding: 10px;
  color: #355C7D;
  backgroundColor: #F8B195;
  fontSize: 30px;
`;

const HeaderWrapper = styled.View`
  padding: 50px 0 20px 0;
  alignItems: center;
`;

const HeaderLayout = () => (
  <HeaderWrapper>
    <Header> Nicole's Task Manager </Header>
  </HeaderWrapper>
);

export default HeaderLayout;
