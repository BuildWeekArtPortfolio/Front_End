import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Routes from "./routes/Routes";
import "./styles/App.scss";
import Login from './components/Login'
import Register from './components/Register';
import axios from "axios";


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
        <Navigation /> 
        <Routes />
      </div>
    );
  }
}

export default App;
