import React from 'react';
import styled from 'styled-components/native';

import ActivityStatus from './ActivityStatus';

const Wrapper = styled.View`
  flex: 1;
  backgroundColor: white;
  borderTopLeftRadius: 18px;
  borderTopRightRadius: 18px;
  marginTop: 18px;
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