import React from 'react';
import styles from './Subheader.module.scss';
import {
  Paper,
  InputBase,
  Toolbar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Component = () => (
  <Paper elevation={0} className={styles.container}>
    <Toolbar>
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: styles.inputRoot,
            input: styles.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </Toolbar>
  </Paper>
);

export {
  Component as Subheader,
  Component as SubheaderComponent,
};
