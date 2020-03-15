import React from 'react';
import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import drawer from '../assets/drawer.png';

const Item = styled.View`
  marginHorizontal: 18px;
  marginVertical: 9px;
  borderRadius: 9px;
  backgroundColor: white;
  paddingVertical: 9px;
  paddingHorizontal: 18px;
  flexDirection: row;
  borderWidth: 1px;
  borderColor: #ecf0f1;
  shadowColor: #ecf0f1;
  shadowOffset: { width: 0, height: 2 };
  elevation: 9;
  shadowOpacity: 0.8;
  shadowRadius: 9px;
`

const Details = styled.View`
  width: 60%;
`

const StrongDetail = styled.Text`
  color: #005c42;
  fontWeight: bold;
  fontSize: 18px;
`

const Detail = styled.Text`
  color: #2e3131;
  marginBottom: 9px;
`

const Image = styled.Image`
  width: 40%;
  height: 120px;
  marginRight: 9px;
`


function List({
  data
}) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `bank-${index}`}
      renderItem={({ item }) =>
        <Item>
          <Image source={{ uri: item.url }} />
          <Details>
            <StrongDetail>{ item.bankName }</StrongDetail>
            <Detail>{ item.description }</Detail>
            <Detail>{ `Con una antiguedad de ${item.age} años` }</Detail>
          </Details>
        </Item>
      }
    />
  );
}

export default List;
