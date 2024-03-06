import React from 'react';
import styled from "styled-components";
import CodeViewer from '../components/CodeViewer';

export function RadioButtonComponent() {
  const javascriptCode = `
    // JavaScript code here...
  `;

  const htmlCode = `
    <!-- HTML code here... -->
  `;

  const cssCode = `
    /* CSS code here... */
  `;

  return (
    <Container>
      <h1>Radio Button</h1>
      <CodeViewer
        javascriptCode={javascriptCode}
        htmlCode={htmlCode}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin: 50px;
`;