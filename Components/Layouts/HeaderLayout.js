import React from 'react';
import styled from 'styled-components';

const Header = styled.Text`
  color: #355C7D;
  fontSize: 40px;
  height: 70px;
`;

const HeaderWrapper = styled.View`
  borderBottomEndRadius: 10px;
  borderBottomStartRadius: 10px;
  padding-top: 50px;
  alignItems: center;
  backgroundColor: #F8B195;

`;

const HeaderLayout = () => (
  <HeaderWrapper>
    <Header> clutter </Header>
  </HeaderWrapper>
);

export default HeaderLayout;
