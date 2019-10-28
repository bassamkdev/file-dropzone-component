import React from 'react';

import './App.css';

import Dropzone from './dropzone/dropzone.component'

const App = () => (
  <div className='app'>
    <div className='card'>
      <Dropzone onFilesRecieved = {console.log}/>
    </div>
  </div>
)

export default App;
