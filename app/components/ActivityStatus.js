import React from 'react';
import styled from 'styled-components/native';

import { View, ActivityIndicator } from 'react-native';


const Text = styled.Text`
  text-align: center;
  padding-vertical: 9px;
  font-size: 16px;
  color: #005c42;
`

function ActivityStatus({
  message
}) {
  return (
    <View style={{ marginVertical: 9 }}>
      <ActivityIndicator size="large" color="#005c42" />
      <Text>
        { message }
      </Text>
    </View>
  );
}

export default ActivityStatus;
