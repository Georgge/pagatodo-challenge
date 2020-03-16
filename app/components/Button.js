import React from 'react';
import  styled from 'styled-components/native';

const Touchable = styled.TouchableOpacity`
  paddingVertical: 9px;
  paddingHorizontal: 18px;
  backgroundColor: ${({ disabled, danger }) => disabled ? '#ececec' : danger ? '#96281b' : '#005c42'};
  minHeight: 80px;
  marginVertical: 9px;
  marginHorizontal: 18px;
  maxWidth: 400px;
  borderRadius: 9px;
  borderWidth: 1px;
  borderColor: #ecf0f1;
  shadowColor: #ecf0f1;
  elevation: 9;
  shadowOpacity: 0.8;
  shadowRadius: 9px;
  justifyContent: center;
`

const Text = styled.Text`
  color: ${({ disabled }) => disabled ? '#bdc3c7' : 'white'}
  fontWeight: bold;
  textTransform: uppercase;
  textAlign: center;
  fontSize: 16px;
`;

function Button({
  children, disabled, danger,
  onPress
}) {
  return (
    <Touchable
      disabled={disabled}
      danger={danger}
      onPress={onPress ? () => onPress() : null}>
      <Text disabled={disabled}>
        { children }
      </Text>
    </Touchable>
  );
}

export default Button;
