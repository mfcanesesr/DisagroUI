import React from 'react';
import styled from "styled-components";
import CodeViewer from '../components/CodeViewer';

export const CheckboxComponent = () => {
  return (
    <Container>
      <h1>Checkbox</h1>
      <CodeViewer></CodeViewer>
    </Container>
  );
}


const Container = styled.div`
   height: auto;
   margin: 50px;
`;

export default CheckboxComponent;
