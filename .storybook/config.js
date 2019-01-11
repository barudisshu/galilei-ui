// .storybook/config.js中修改路径
import { configure, storiesOf } from '@storybook/react';
// src/stories/button.stories.js
import React from 'react';
import { Button } from '../src/lib';

const req = require.context('../src/stories', true, /\.stories\.js$/);


function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

storiesOf('Button', module)
  .add('基本用法', () => (
      <Button>按钮</Button>
    ),
  );
