import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GridContainer = props => {
  const className = classNames(
    `Grid`,
    `Grid-container-${props.direction}`,
    `Grid-container-row`,
    `Grid-container-${props.justify}`,
    `Grid-container-align-${props.alignItems}`,
    props.className,
  );
  return <div className={className}>{props.children}</div>;
};

export default GridContainer;
GridContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  justify: PropTypes.string,
  className: PropTypes.string,
};

GridContainer.defaultProps = {
  direction: 'row',
  alignItems: 'center',
  justify: 'flex-start',
};
