import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from '../../components';
import input from './input.md';

storiesOf('Input', module)
  .add('基本用法',
    withInfo({
      inline: true,
      markdown: input,
    })(() =>
      <Input
        id={'sample'}
        label={''}
        value={'test'}
        type={''}
        handleChange={ () => {  } }
        text={'text'}/>,
    ),
  );

