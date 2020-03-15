import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import { populateBanks } from '../redux/ducks/bankDuck';

import Header from '../components/Header';
import ListContainer from '../components/ListContainer';


function ListScreen({
  populateBanks, banks, fetching,
  status, message,
}) {
  useEffect(() => {
    populateBanks();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <Header>
        The Challenge
      </Header>
      <ListContainer loading={fetching} message={message} >

      </ListContainer>
    </View>
  );
}

function mapStateToProps({ bank }) {
  console.log(bank.fetching);
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
