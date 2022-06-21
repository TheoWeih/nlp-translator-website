import React from 'react';
import logo from './logo.svg';
import './App.css';
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

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {},
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
      <Container maxWidth='sm'>
        <div className='App'>
          <header className='App-header'>
            <AppBar position='fixed' color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant='h6'>MUI Themeing</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2'>Welcome to MUI</Typography>
            <Typography variant='subtitle1'>
              Learn how to use Material UI
            </Typography>
            {/* <TextField
              variant='filled'
              color='secondary'
              type='email'
              label='E-Mail'
              placeholder='John@Doe.com'
            /> */}
            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }}></Paper>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }}></Paper>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }}></Paper>
              </Grid>
            </Grid>

            <CheckboxExample />

            <ButtonGroup size='large' variant='contained'>
              <Button startIcon={<SaveIcon />} color='primary'>
                Save
              </Button>
              <Button startIcon={<DeleteIcon />} color='secondary'>
                Discard
              </Button>
            </ButtonGroup>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}
            {/* <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a> */}
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
