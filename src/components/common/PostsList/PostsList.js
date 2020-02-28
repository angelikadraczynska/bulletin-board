import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PostsList.module.scss';
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  IconButton,
  Avatar,
  Typography,
  Grid,
  Button,
  CardActions,
} from '@material-ui/core';
import Aux from '../../../utils/Auxiliary';
import { formatDate } from '../../../utils/formatDate';

const PostsList = ({ posts }) => {
  return (
    <Aux>
      <Grid container spacing={1}>
        {posts.length > 0 ? (
          posts.map(post => (
            <Grid item xs={4} key={post.id}>
              <Card className={styles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={styles.avatar}>
                      R
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={post.title}
                  subheader={formatDate(post.created)}
                />
                <CardMedia
                  component="img"
                  height="200"
                  image={post.photo}
                  title={post.title}
                />
                <CardContent>
                  <Typography paragraph>{post.text}</Typography>
                </CardContent>
                <CardActions className={styles.cardAction}>
                  <Link
                    to={`/post/${post._id}`}
                    className={styles.showMoreButton}
                  >
                    <Button size="small" color="primary">
                      Show More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No available posts!</p>
        )}
      </Grid>
    </Aux>
  );
};

PostsList.propTypes = {
  posts: PropTypes.object,
};

export default PostsList;
