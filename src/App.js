import React, { Component} from "react";
import "./App.css";

const { GreeterClient } = require('../assests/protos/demo_grpc_web_pb.js');
const { HelloRequest, HelloResponse } = require('../assests/protos/demo_pb.js');

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      response: null,
      listResult: ['default']
    };
    this.call = this.call.bind(this);
  }

  async call(){
    console.log("call()");

    try {
      const grcpClient = new GreeterClient("http://127.0.0.1:9090");
      const request = new HelloRequest();
      request.setMessage("adam");
  

      grcpClient.sayHello(request, {}, (err, response) => {
        if (response == null) {
          console.log(err)
        }else {
          console.log("res: ", response);
          this.setState({response: response})
        }
      });


    } catch (err) {
      console.log("err: ", err.code);
      console.log("err: ", err.message);
    }
  }


  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <button onClick={this.call}>List meetings</button>
        <p> {this.state.response && this.state.response.getMessage()} </p>
        <p> {this.state.listResult} </p>
      </div>
    );
  }
}

export default App;