import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  backgroundColor: #005c42;
  paddingVertical: 9px;
`

const Text = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 20px;
  textTransform: uppercase;
  fontWeight: bold;
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