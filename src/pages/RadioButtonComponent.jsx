import React, { useState } from 'react';
import styled from "styled-components";
import { Paper, Typography, Divider, IconButton, MenuItem, Select, Tab, Tabs } from '@mui/material';
import CodeViewer from '../components/CodeViewer';
const TabPanel = ({ value, index, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
};
export function RadioButtonComponent() {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const vuecode = `
  <template>
  <div class="radio-options-container">
    <div class="radio-option" v-for="option in options" :key="option.id">
      <input
        type="radio"
        :id="option.id"
        :value="option.value"
        v-model="selectedOption"
        :disabled="option.disabled"
        :checked="option.checked"
      >
      <label :for="option.id">{{ option.label }}</label>
    </div>
    <p>Opción seleccionada: {{ selectedOption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedOption: ''
    };
  }
};
</script>

<style scoped>
.radio-options-container {
  align-items: center;
  display: inline-block;
}

.radio-option {
  align-items: center;
  justify-content: center;
  position: relative;
  top: -0.2em;
}
/* Estilo para cuando no está seleccionado */
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 15px; /* Cambio el tamaño al deseado */
  height: 15px; /* Cambio el tamaño al deseado */
  border-radius: 50%;
  border: 1px solid #1CCC1D; /* Color y grosor del borde */
  outline: none;
  cursor: pointer;
}

/* Estilo al pasar el mouse */
input[type="radio"]:hover {
  border: 1px solid #0B520C; /* Color y grosor del borde al hacer hover */
}

input[type="radio"]:checked:hover {
  background-color: #0B520C;
  border: 1px solid #0B520C;
  box-shadow: inset 0 0 0 2px #FFFFFF;
}

input[type="radio"]:checked {
  background-color: #1CCC1D;
  box-shadow: inset 0 0 0 2px #FFFFFF;
  border: 1px solid #1CCC1D; 
}

input[type="radio"]:disabled{
  border: 1px solid #E5E5E5; /* Color y grosor del borde */
}
input[type="radio"]:disabled + label{
  color: #E5E5E5; /* Color y grosor del borde */
}
input[type="radio"]:disabled:checked{
  background-color: #E5E5E5;
  box-shadow: inset 0 0 0 2px #FFFFFF;
  border: 1px solid #E5E5E5; /* Color y grosor del borde */
}


</style>

  `;

  const nextcode = `
  import React, { useState } from "react";
  
  function RadioButton({ options }) {
    const [selectedOption, setSelectedOption] = useState("");
  
    return (
      <div className="radio-options-container">
        {options.map(option => (
          <div className="radio-option" key={option.id}>
            <input
              type="radio"
              id={option.id}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => setSelectedOption(option.value)}
              disabled={option.disabled}
              className="radio-input"
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
        <p>Opción seleccionada: {selectedOption}</p>
        <style jsx>{\`
          .radio-options-container {
            align-items: center;
            display: inline-block;
          }
  
          .radio-option {
            align-items: center;
            justify-content: center;
            position: relative;
            top: -0.2em;
          }
  
          .radio-input {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 1px solid #1CCC1D;
            outline: none;
            cursor: pointer;
          }
  
          .radio-input:hover {
            border: 1px solid #0B520C;
          }
  
          .radio-input:checked {
            background-color: #1CCC1D;
            box-shadow: inset 0 0 0 2px #FFFFFF;
            border: 1px solid #1CCC1D;
          }
  
          .radio-input:checked:hover {
            background-color: #0B520C;
            border: 1px solid #0B520C;
            box-shadow: inset 0 0 0 2px #FFFFFF;
          }
  
          .radio-input:disabled {
            border: 1px solid #E5E5E5;
          }
  
          .radio-input:disabled + label {
            color: #E5E5E5;
          }
  
          .radio-input:disabled:checked {
            background-color: #E5E5E5;
            box-shadow: inset 0 0 0 2px #FFFFFF;
            border: 1px solid #E5E5E5;
          }
        \`}</style>
      </div>
    );
  }
  
  export default RadioButton;
  
  `;

  const angularcode = `
    /* CSS code here... */
  `;

  return (
    <Container>
      <h1>Radio Button</h1>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Vue" />
        <Tab label="Angular" />
        <Tab label="Next" />
      </Tabs>
      <Divider sx={{ my: 2 }} />
      <TabPanel value={tabValue} index={0}>
        <CodeViewer javascriptCode={vuecode}/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <CodeViewer javascriptCode={nextcode}/>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <CodeViewer javascriptCode={angularcode}/>
      </TabPanel>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  margin: 50px;
`;