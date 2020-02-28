import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Header.module.scss';
import { Navbar } from '../Navbar/Navbar';
import { Subheader } from '../Subheader/Subheader';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Navbar />
    <Subheader />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  preventDefault: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
