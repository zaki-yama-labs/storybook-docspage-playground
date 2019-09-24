import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'LDS Button',
  component: Button,
};

export const noType = () => <Button/>;
export const neutral = () => <Button type="neutral" />;
export const brand = () => <Button type="brand" />;
export const destructive = () => <Button type="destructive" />;
