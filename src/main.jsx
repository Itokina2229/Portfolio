import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    // Police principale
    fontFamily: '"Plus Jakarta Sans", sans-serif',

    // Titres
    h1: {
      fontFamily: '"Lora", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Lora", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Lora", serif',
      fontWeight: 600,
    },

    // Code
    code: {
      fontFamily: '"JetBrains Mono", monospace',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
