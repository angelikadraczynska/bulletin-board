import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentPost, fetchPost } from '../../../redux/postRedux';
import styles from './Post.module.scss';
import { PostDetails } from '../../common/PostDetails/PostDetails';
import { isAuth, userEmail } from '../../../redux/userRedux';

const Component = ({ match, post, fetchPost }) => {
  const postId = match.params.id;
  useEffect(() => {
    fetchPost(postId);
  }, [fetchPost, postId]);

  return (
    <div className={styles.container}>
      <PostDetails {...post}/>
    </div>
  );
};

Component.propTypes = {
  post: PropTypes.object,
  match: PropTypes.string,
  fetchPost: PropTypes.func,
};

const mapStateToProps = state => ({
  post: getCurrentPost(state),
  auth: isAuth(state),
  email: userEmail(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Post,
  // Container as PostContainer,
  Component as PostComponent,
};
