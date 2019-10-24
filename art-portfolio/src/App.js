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
  //   Axios
  //     .put(`/${id}`, updatedPost)
  //     .then(res => {
  //       this.setState({
  //         putError: '',
  //         putSuccess: ''
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         putError: '',
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
