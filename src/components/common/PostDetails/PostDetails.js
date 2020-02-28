import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PostDetails.module.scss';
import {
  Grid,
  Button,
  Typography,
  CardMedia,
  Divider,
} from '@material-ui/core';
import { formatDate } from '../../../utils/formatDate';

const Component = ({
  _id,
  title,
  text,
  created,
  photo,
  author,
  status,
  price,
  phone,
  location,
  auth,
  userEmail,
}) => (
  <div className={styles.container}>
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Divider />
        <Typography variant="subtitle2">
          Added: {formatDate(created)}
        </Typography>
        <CardMedia
          className={styles.media}
          component="img"
          image={photo}
          title="Contemplative Reptile"
        />
        <Typography variant="subtitle2">Location: {location}</Typography>
        <Divider />
        <Typography paragraph>{text}</Typography>
        <Divider />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="secondary"
          className={styles.biggerButton}
        >
          Contact: {phone}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={styles.biggerButton}
        >
          Price: {price}
        </Button>
        {auth && author === userEmail && (
          <Button
            variant="contained"
            color="secondary"
            className={styles.biggerButton}
          >
            <Link className={styles.link} to={`/post/${_id}/edit`}>
              Edit
            </Link>
          </Button>
        )}
      </Grid>
    </Grid>
  </div>
);

Component.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  created: PropTypes.string,
  photo: PropTypes.string,
  author: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
  phone: PropTypes.string,
  location: PropTypes.string,
  auth: PropTypes.bool,
  userEmail: PropTypes.string,
};

export { Component as PostDetails, Component as PostDetailsComponent };
