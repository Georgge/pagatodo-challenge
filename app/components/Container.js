import React from 'react';
import styled from 'styled-components/native';

import ActivityStatus from './ActivityStatus';

const Wrapper = styled.View`
  flex: 1;
  backgroundColor: white;
  borderTopLeftRadius: 18px;
  borderTopRightRadius: 18px;
  marginTop: 18px;
  borderWidth: 1px;
  borderColor: #2c3e50;
  shadowColor: #2c3e50;
  elevation: 9;
  shadowOpacity: 0.8;
  shadowRadius: 9px;
  paddingVertical: ${({ verticalPadding }) => verticalPadding ? '9px' : '0px'}
`

function Container({
  children, loading, verticalPadding
}) {
  return (
    <Wrapper verticalPadding={verticalPadding}>
      { loading &&  <ActivityStatus message="Solicitando lista" /> }
      { children }
    </Wrapper>
  );
}

export default Container;