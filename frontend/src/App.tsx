import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
// import { makeStyles } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import 'fontsource-roboto';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import TextareaAutosize from '@mui/base/TextareaAutosize';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 13,
    },
    subtitle1: {
      marginBottom: 24,
    },
  },
  palette: {
    secondary: {
      main: '#E33E7F',
    },
  },
});

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label='Testing Checkbox'
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <AppBar position='fixed' color='primary'>
            <Toolbar>
              <IconButton>
                <MenuIcon></MenuIcon>
              </IconButton>
              <Typography variant='h6'>Some App Name</Typography>
            </Toolbar>
          </AppBar>
          <Typography variant='h2'>Learning languages the easy way</Typography>
          <Typography variant='subtitle1'>
            Find out which words are important and understand texts faster
          </Typography>

          <div>
            <TextField
              variant='filled'
              label='Text in foreign language'
              multiline
              rows='15'
              style={{
                width: 400,
                marginLeft: 24,
                backgroundColor: 'white',
              }}
            />

            <TextField
              variant='filled'
              label='Translated text in english'
              multiline
              rows='15'
              style={{
                width: 400,
                marginLeft: 24,
                backgroundColor: 'white',
              }}
            />
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
