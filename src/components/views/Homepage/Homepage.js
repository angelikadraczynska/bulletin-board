import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Homepage.module.scss';
import { getAll, fetchPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import PostsList from '../../common/PostsList/PostsList';
import { isAuth } from '../../../redux/userRedux';
import { Button } from '@material-ui/core';
import Aux from '../../../utils/Auxiliary';

const Component = ({ fetchPosts, posts, auth }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Aux>
      {auth ? (
        <Link to="/post/add" className={styles.link}>
          <Button variant="contained" color="primary">
            Add new
          </Button>
        </Link>
      ) : null}

      <div className={styles.postList}>
        <PostsList posts={posts} />
      </div>
    </Aux>
  );
};

Component.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.object,
  auth: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  auth: isAuth(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
