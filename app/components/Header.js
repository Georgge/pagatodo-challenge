import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';

const Container = styled.View`
  backgroundColor: #005c42;
  paddingVertical: 9px;
`

const Text = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 20px;
  textTransform: uppercase;
  fontWeight: bold;
`

const SmallText = styled.Text`
  fontSize: 14px;
  color: white;
  textAlign: center;
`

export default function Header({
  children, subtitle
}) {
  return (
    <Container>
      <Text textAlignVertical>{ children }</Text>
      <SmallText>
        { subtitle }
      </SmallText>
    </Container>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  subtitle: 'By: Jorge García',
}
