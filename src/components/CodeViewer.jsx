import React, { useState } from 'react';
import { Paper, Typography, Divider, IconButton, MenuItem, Select } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ContentCopy } from '@mui/icons-material';

const CodeViewer = ({ files }) => {
  const [language, setLanguage] = useState(files[0].language);

  const handleCopy = () => {
    // Lógica para copiar el código al portapapeles
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const selectedFile = files.find(file => file.language === language);
  const code = selectedFile ? selectedFile.code : '';

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Código
        </Typography>
        <Select value={language} onChange={handleChangeLanguage}>
          {files.map(file => (
            <MenuItem key={file.language} value={file.language}>{file.label}</MenuItem>
          ))}
        </Select>
      </div>
      <Divider sx={{ my: 2 }} />
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <CopyToClipboard text={code}>
        <IconButton onClick={handleCopy} size="small" disabled={!code}>
          <ContentCopy />
        </IconButton>
      </CopyToClipboard>
    </Paper>
  );
};

export default CodeViewer;
