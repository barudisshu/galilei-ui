// .storybook/config.js中修改路径
import { configure } from '@storybook/react';
// src/stories/button.stories.js
import React from 'react';

const req = require.context('../src/stories', true, /\.stories\.js$/);


function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
