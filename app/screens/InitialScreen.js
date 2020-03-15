import React from 'react';
import styled from 'styled-components/native';

import Wrapper from '../components/Wrapper';
import Container from '../components/Container';

import logo from '../assets/pagatodo-logo.png';


const Image = styled.Image`
  alignItems: center;
  width: 100%;
  height: 200px;
`

function InitialScreen() {
  return (
   <Wrapper title="Paga Todo" subtitle="Prueba">
     <Container verticalPadding>
      <Image source={logo} resizeMode="contain" />
     </Container>
   </Wrapper>
  );
}

export default InitialScreen;