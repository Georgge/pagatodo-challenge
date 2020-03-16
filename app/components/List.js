import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import ErrorMessage from './ErrorMessage';
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
  data = [], error, errorMessage
}) {
  if (error) return <ErrorMessage message={errorMessage} />
  if (data.length === 0) return <ErrorMessage empty message="No hay datos disponibles" />

  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 18 }}
      data={data}
      keyExtractor={(item, index) => `bank-${index}`}
      renderItem={({ item }) => {
        if (item && (typeof item !== 'object' || Array.isArray(item))) return null;

        return (
          <Item>
            <Image source={item.url ? { uri: item.url } : drawer} resizeMode="cover" />
            <Details>
              <StrongDetail>{ item.bankName || 'Nombre no disponible' }</StrongDetail>
              <Detail>{ item.description || 'Descripción no disponible' }</Detail>
              {
                item.age && <Detail>{ `Con una antiguedad de ${item.age} años` }</Detail>
              }
            </Details>
          </Item>
        )
      }}
    />
  );
}

export default List;

List.propTypes = {
  data: PropTypes.array,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

List.defaultProps = {
  data: [],
  error: false,
  errorMessage: null,
};
