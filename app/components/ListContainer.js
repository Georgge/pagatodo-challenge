import React from 'react';
import styled from 'styled-components/native';

import ActivityStatus from './ActivityStatus';

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  margin-top: 18px;
`

function ListContainer({
  children, loading
}) {
  return (
    <Wrapper>
      { loading &&  <ActivityStatus message="Solicitando lista" /> }
      { children }
    </Wrapper>
  );
}

export default ListContainer;