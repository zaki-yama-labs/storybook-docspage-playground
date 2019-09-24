import { configure } from '@storybook/react';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
