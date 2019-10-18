import React from "react";

class CreatePostForm extends React.Component {
  state = {};

  componentDidUpdate(prevProps) {}

  changeHandler = e => {
    e.persist();
  };

  handleSubmit = e => {};

  render() {
    return (
      <div>
        <h2>Create New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="string"
            name="imageUrl"
            onChange={this.changeHandler}
            placeholder="Image"
            // value={this.state}
          />
          <div />

          <input
            type="string"
            name="description"
            onChange={this.changeHandler}
            placeholder="Description"
            // value={this.state}
          />
          <div />

          <button>Create Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
