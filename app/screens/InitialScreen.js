import React from 'react';
import styled from 'styled-components/native';

import Wrapper from '../components/Wrapper';
import Container from '../components/Container';
import Button from '../components/Button';

import logo from '../assets/pagatodo-logo.png';


const Image = styled.Image`
  alignItems: center;
  width: 100%;
  height: 200px;
`

function InitialScreen({
  navigation
}) {
  const { navigate } = navigation;

  return (
   <Wrapper title="Paga Todo" subtitle="Prueba">
     <Container verticalPadding>
      <Image source={logo} resizeMode="contain" />
      <Button onPress={() => navigate('List')}>
        Obtener Lista
      </Button>
      <Button disabled>
        Limpiar Storage
      </Button>
     </Container>
   </Wrapper>
  );
}

export default InitialScreen;