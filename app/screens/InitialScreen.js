import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { localVerification, clearStorage } from '../redux/ducks/bankDuck';

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
  navigation, localData,
  localVerification,
  clearStorage,
}) {
  const { navigate } = navigation;

  useEffect(() => {
    localVerification();
  }, []);

  return (
   <Wrapper title="Paga Todo" subtitle="Prueba">
     <Container verticalPadding>
      <Image source={logo} resizeMode="contain" />
      <Button onPress={() => navigate('List')}>
        { `${localData ? 'Ver' : 'Obtener'} Lista` }
      </Button>
      <Button
        disabled={!localData}
        danger
        onPress={() => clearStorage()}>
        Limpiar Storage
      </Button>
     </Container>
   </Wrapper>
  );
}

function mapStateToProps({ bank }) {
  return {
    localData: bank.local
  };
}

export default connect(
  mapStateToProps, {
    localVerification,
    clearStorage,
  })(InitialScreen);