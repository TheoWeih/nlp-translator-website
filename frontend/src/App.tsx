import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/icons-material/Checkbox';

function CheckboxExample() {
  return <div>Test</div>;
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CheckboxExample />
        <ButtonGroup size='large' variant='contained'>
          <Button startIcon={<SaveIcon />} color='primary'>
            Save
          </Button>
          <Button startIcon={<DeleteIcon />} color='secondary'>
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
