import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GridItem = props => {
  const gridClasses = Object.keys(props.breakpoints).reduce(
    (acc, currentVal) => {
      if (!props.breakpoints[currentVal]) {
        return acc;
      }
      return `${acc} Grid-col-${currentVal}-${props.breakpoints[currentVal]}`;
    },
    '',
  );
  const className = classNames(props.className, gridClasses);
  return <div className={className}>{props.children}</div>;
};

export default GridItem;

GridItem.propTypes = {
  breakpoints: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
