import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';
import { Container } from '@material-ui/core';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <Container maxWidth="lg">{children}</Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
