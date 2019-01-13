import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../../components';
import button from './button.md';

storiesOf('Button', module)
  .add('基本用法',
    withInfo({
      inline: true,
      markdown: button,
    })(() =>
      <Button>测试按钮</Button>,
    ),
  );
