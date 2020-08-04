/* eslint-disable react/button-has-type */
import React from 'react';
import propTypes from 'prop-types';
import './_button.scss';

const buttonSizes = {
  small: 'btn-sm',
  medium: 'btn-md',
  large: 'btn-lg',
};

const CustomButton = props => (
  <button
    type={props.type}
    disabled={props.disabled}
    onClick={event => props.onClick(event, props)}
    className={`btn btn-${props.variant} ${
      buttonSizes[props.size]
    } ${props.fullWidth && 'btn-large'} ${props.className}`}
    style={props.buttonParentStyles}
  >
  </button>
);

CustomButton.propTypes = {
  onClick: propTypes.func,
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  type: propTypes.string,
  variant: propTypes.string,
  size: propTypes.string,
  buttonParentStyles: propTypes.object,
  text: propTypes.string,
  className: propTypes.string,
};

CustomButton.defaultProps = {
  onClick: () => {},
  buttonParentStyles: {},
  disabled: false,
  fullWidth: false,
  type: 'button', // button, submit
  text: 'Submit',
  variant: 'primary', // primary, secondary, tertiary
  size: 'medium', // small, medium, large
};

export default CustomButton;
