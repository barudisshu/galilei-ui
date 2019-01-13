import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

const App = () => (
  <div>
    <h1>Galilei UI</h1>
    <h2>Button</h2>
    <p>Here&apos;s an example of button.</p>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
