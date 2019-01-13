import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

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

export default hot(App);

ReactDOM.render(<App/>, document.getElementById('root'));
