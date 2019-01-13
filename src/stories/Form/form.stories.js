import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { MForm } from '../../components';
import form from './form.md';

storiesOf('Form', module)
  .add('基本用法',
    withInfo({
      inline: true,
      markdown: form,
    })(() =>
      <MForm/>,
    ),
  );
