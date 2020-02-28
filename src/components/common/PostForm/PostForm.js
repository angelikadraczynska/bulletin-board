import React from 'react';
import PropTypes from 'prop-types';
import PostFormTemplate from './postFormTemplate';
import styles from './PostForm.module.scss';
import Aux from '../../../utils/Auxiliary';
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';

const Component = ({
  submitAction,
  userEmail,
  submitButton,
  post,
  postId,
}) => {
  const { fields, methods } = PostFormTemplate(post);
  return (
    <Aux>
      <form
        className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          submitAction({ ...fields }, userEmail, postId).then(result => {});
        }}
      >
        <Grid item xs={12}>
          <TextField
            required
            className={styles.input}
            id="title-input"
            label="Title"
            type="text"
            variant="filled"
            value={fields.title}
            onChange={e => {
              methods.setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className={styles.input}
            id="content-input"
            label="Content"
            multiline
            rows="4"
            type="text"
            variant="filled"
            value={fields.text}
            onChange={e => {
              methods.setText(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={styles.input}
            id="photo-input"
            label="Photo address"
            type="text"
            variant="filled"
            value={fields.photo}
            onChange={e => {
              methods.setPhoto(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={styles.input}
            id="local-input"
            label="Location"
            type="text"
            variant="filled"
            value={fields.location}
            onChange={e => {
              methods.setLocation(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className={styles.input}
            id="email-input"
            label="Email"
            type="text"
            variant="filled"
            value={fields.email}
            onChange={e => {
              methods.setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className={styles.input}
            id="phone-input"
            label="Phone number"
            type="text"
            variant="filled"
            value={fields.phone}
            onChange={e => {
              methods.setPhone(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className={styles.input}
            id="price-input"
            label="Price"
            type="text"
            variant="filled"
            value={fields.price}
            onChange={e => {
              methods.setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled
            className={styles.input}
            id="author-input"
            label="Author"
            type="text"
            variant="filled"
            defaultValue="Currently logged"
          />
        </Grid>
        <FormControl variant="outlined" className={styles.status}>
          <InputLabel htmlFor="status-select">Status</InputLabel>
          <Select
            native
            value={fields.status}
            onChange={e => methods.setStatus(e.target.value)}
            labelWidth={60}
            inputProps={{
              name: 'status',
              id: 'status-select',
            }}
          >
            <option value={'published'}>publish</option>
            <option value={'draft'}>draft</option>
            <option value={'closed'}>closed</option>
          </Select>
        </FormControl>
        <Grid item xs={12}>
          <Button variant="contained" className={styles.Btn} type="submit">
            {submitButton ? submitButton : 'Submit'}
          </Button>
        </Grid>
      </form>
    </Aux>
  );
};

Component.propTypes = {
  submitAction: PropTypes.node,
  userEmail: PropTypes.string,
  redirectUrl: PropTypes.string,
  submitButton: PropTypes.string,
  post: PropTypes.func,
  postId: PropTypes.string,
};

export {
  Component as PostForm,
  Component as PostFormComponent,
};
