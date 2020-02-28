import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { isAuth, loginUser, logoutUser } from '../../../redux/userRedux';
import styles from './Navbar.module.scss';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import Aux from '../../../utils/Auxiliary';

const Component = ({ className, preventDefault, auth, login, logout }) => {

  const handleChange = event => {
    if (!auth) {
      login(event.target.checked);
    } else {
      logout(event.target.checked);
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Logo
          </Typography>
          <Grid justify="flex-end" container>
            <List component="nav">
              <ListItem>
                <ListItemText inset>
                  <Typography color="inherit">
                    <Link href="/" onClick={preventDefault} color="inherit">
                      Homepage
                    </Link>
                  </Typography>
                </ListItemText>
                {auth ? (
                  <Aux>
                    <ListItemText inset>
                      <Typography color="inherit">
                        <Link href="/myposts" onClick={preventDefault} color="inherit">
                          My posts
                        </Link>
                      </Typography>
                    </ListItemText>
                  </Aux>
                ) : null}
                <ListItemText inset>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={auth}
                          onChange={handleChange}
                          aria-label="login switch"
                        />
                      }
                      label={auth ? 'Logout' : 'Login'}
                    />
                  </FormGroup>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  preventDefault: PropTypes.string,
  auth: PropTypes.bool,
  login: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: isAuth(state),
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginUser()),
  logout: () => dispatch(logoutUser()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Navbar,
  Component as NavbarComponent,
};
