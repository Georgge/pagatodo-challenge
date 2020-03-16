import React  from 'react';
import styled from 'styled-components/native';

import { Image } from 'react-native';

import server from '../assets/server.png';
import emptyImg from '../assets/empty.png';


const Wrapper = styled.View`
  alignItems: center;
  flex: 1;
  justifyContent: center;
`

const Text = styled.Text`
  fontWeight: bold;
  width: 80%;
  textAlign: center;
  marginBottom: 128px;
  color: #2e3131;
  fontSize: 18px;
`;

function ErrorMessage({
  message, empty
}) {
  return (
    <Wrapper>
      <Image source={empty ? emptyImg : server} />
      <Text>
        { message }
      </Text>
    </Wrapper>
  );
}

export default ErrorMessage;
