import React from 'react';
import PropTypes from 'prop-types';
import { Button as LDSButton } from 'react-lightning-design-system';

export const Button = ({ type, label }) => <LDSButton type={type} label={label}></LDSButton>

Button.propTypes = {
  type: PropTypes.oneOf(['neutral', 'brand', 'destructive']),
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'Hello',
}
