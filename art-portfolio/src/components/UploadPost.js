import React from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';


class UploadPost extends React.Component {

    state = {
        id: Date.now(), 
        images: 'hello.jpg', 
        artistID: '1',
        caption: ''
    };

  changeHandler = e => {
    e.persist();
    this.setState({
        [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
      e.preventDefault();
      console.log(this.state)
      AxiosWithAuth().post(`art/add`, {
        'images': e.images,
        "caption": e.caption
      })
      .then(res => {console.log("res", res)})
      .catch(err => {console.log("err", err)})
  };

  render() {
    return (
      <div>
        <h2>Create New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="images"
            onChange={this.changeHandler}
            placeholder="Image"
            value={this.state.images}
          />
          <div />
          <input
            type="text"
            name="caption"
            onChange={this.changeHandler}
            placeholder="Caption"
            value={this.state.caption}
          />
          <div />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default UploadPost;