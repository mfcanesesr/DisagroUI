import React from "react";
import styled from "styled-components";
import { Paper, Typography, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  code: {
    fontFamily: "monospace",
    fontSize: "14px",
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(1),
    borderRadius: "4px",
    overflowX: "auto",
    marginTop: theme.spacing(2),
  },
}));

// Define Container antes de su uso
const Container = styled.div`
  height: 100vh;
  margin: 50px;
`;

export function TabsComponent() {
  const classes = useStyles();

  const codeSnippet = `
    import styled from "styled-components";
    
    export function TabsComponent() {
      return (
        <Container>
          <h1>Tabs</h1>
        </Container>
      );
    }
    
    const Container = styled.div\`
      height: 100vh;
      margin: 50px;
    \`;
  `;

  return (
    <Container>
      <h1>Tabs</h1>
      <Paper className={classes.root}>
        <Typography variant="h6">Tabs make it easy to explore and switch between different views.
</Typography>
        <TextField
          className={classes.code}
          multiline
          variant="outlined"
          rows={10}
          value={codeSnippet}
          InputProps={{ readOnly: true }}
        />
      </Paper>
    </Container>
  );
}
