import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { addPost } from '../../../redux/postRedux';
import { userEmail } from '../../../redux/userRedux';
import styles from './PostAdd.module.scss';
import { PostForm } from '../../common/PostForm/PostForm';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Add new post:</h2>
    <PostForm
      submitAction={addPost}
      userEmail={userEmail}
      submitButton="Add post"
    />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export {
  Component as PostAdd,
  Component as PostAddComponent,
};
