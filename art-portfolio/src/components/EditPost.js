import React from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';


const EditPost = () => {

  const putEdit = ( id, updatedPost) => {
    AxiosWithAuth
      .put(`/api/artist/artwork/:id`, updatedPost)
      .then(res => {
        this.setState({

        });
      })
      .catch(err => console.log(err.message));
  };

  return(
  <>
  </>
  )
}


export default EditPost;