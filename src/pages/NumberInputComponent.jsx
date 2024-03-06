import React from 'react';
import styled from "styled-components";
import CodeViewer from '../components/CodeViewer';

export const NumberInputComponent = () => {
  return (
    <Container>
      <h1>Number Input</h1>
      <CodeViewer></CodeViewer>
    </Container>
  );
}

const Container = styled.div`
   height: 100vh;
   margin: 50px;
`;

export default NumberInputComponent;