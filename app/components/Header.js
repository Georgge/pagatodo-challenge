import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #005c42;
  padding-vertical: 9px;
`

const Text = styled.Text`
  color: white;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
`

export default function Header({
  children
}) {
  return (
    <Container>
      <Text textAlignVertical>{ children }</Text>
    </Container>
  );
}