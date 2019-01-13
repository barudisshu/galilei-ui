import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { MLink } from '../../components';
import link from './link.md';

storiesOf('Link', module)
  .add('基本用法',
    withInfo({
      inline: true,
      markdown: link,
    })(() =>
      <MLink page={ 'http://galudisu.info' }><span>blog</span></MLink>,
    ),
  );
