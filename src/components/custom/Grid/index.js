import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import './_grid.scss';

const Grid = props => {
  const breakpoints = {
    xs: props.xs,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
  };
  return props.container ? (
    <GridContainer
      direction={props.direction}
      justify={props.justify}
      alignItems={props.alignItems}
      {...props}
    />
  ) : (
    <GridItem breakpoints={breakpoints} {...props} />
  );
};

export default Grid;

Grid.propTypes = {
  container: PropTypes.bool,
  item: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};

Grid.defaultProps = {
  xs: 24,
};
