import React from "react";
import "./styles/App.scss";
import Login from './components/Login'
import Register from './components/Register';
import UploadPost from './components/UploadPost';

import PrivateRoute from './routes/PrivateRoute';
import axios from "axios";
import { Upload } from "antd";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      putSuccess: '',
      putError: ''
    }
  }

  // putEdit = ( id, updatedPost) => {
  //   axios
  //     .put(`/art/:id/${id}`, updatedPost)
  //     .then(res => {
  //       this.setState({
  //         putError: res.data.putSuccess,
  //         putSuccess: ''
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         putError: err.data.Error,
  //         putSuccess: ''
  //       })
  //     });
  // };

  render() {
    return (
      <div className="App">
        {/* <h1>Art Portfolio</h1> */}
        <Login/>
        <Register />
        
        <PrivateRoute 
          exact
          path='/upload'
          component={UploadPost}
        />
      </div>
    );
  }
}

export default App;
