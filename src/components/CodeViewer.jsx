import React, { useState } from 'react';
import { Paper, Typography, Divider, IconButton, MenuItem, Select } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ContentCopy } from '@mui/icons-material';

const CodeViewer = ({ javascriptCode, htmlCode, cssCode }) => {
  const [language, setLanguage] = useState('javascript');

  const handleCopy = () => {
    // Lógica para copiar el código al portapapeles
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  let code = '';
  switch (language) {
    case 'javascript':
      code = javascriptCode;
      break;
    case 'html':
      code = htmlCode;
      break;
    case 'css':
      code = cssCode;
      break;
    default:
      code = '';
  }

  const languages = [
    { value: 'javascript', label: 'JavaScript', code: javascriptCode },
    { value: 'html', label: 'HTML', code: htmlCode },
    { value: 'css', label: 'CSS', code: cssCode },
  ];

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Código
        </Typography>
        <Select value={language} onChange={handleChangeLanguage}>
          {languages.map(lang => lang.code && (
            <MenuItem key={lang.value} value={lang.value}>{lang.label}</MenuItem>
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
