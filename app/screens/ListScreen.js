import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import { populateBanks } from '../redux/ducks/bankDuck';

import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Container from '../components/Container';
import List from '../components/List';


function ListScreen({
  populateBanks, banks, fetching,
  status, message,
}) {
  useEffect(() => {
    populateBanks();
  }, []);


  return (
    <Wrapper>
      <Container loading={fetching} message={message} >
        <List
          data={banks}
          error={status === 'error'}
          errorMessage={ status === 'error' && message}
        />
      </Container>
    </Wrapper>
  );
}

function mapStateToProps({ bank }) {
  return {
    banks: bank.array,
    fetching: bank.fetching,
    status: bank.status,
    message: bank.message,
  }
}

export default connect(
  mapStateToProps, {
    populateBanks,
  }
)(ListScreen);
