import { useState } from 'react';

const PostFormTemplate = (post) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [text, setText] = useState(post ? post.text : '');
  const [price, setPrice] = useState(post ? post.price : 0);
  const [photo, setPhoto] = useState(post ? post.photo : '');
  const [phone, setPhone] = useState(post ? post.phone : '');
  const [email, setEmail] = useState(post ? post.email : '');
  const [location, setLocation] = useState(post ? post.location : '');
  const [date, setDate] = useState(post ? post.created : '');
  const [status, setStatus] = useState(post ? post.status : 'published');

  return {
    fields: {
      title,
      text,
      price,
      photo,
      phone,
      email,
      location,
      date,
      status,
    },
    methods: {
      setTitle,
      setText,
      setPrice,
      setPhoto,
      setPhone,
      setEmail,
      setLocation,
      setDate,
      setStatus,
    },
  };
};

export default PostFormTemplate;