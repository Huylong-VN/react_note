import React, { Component } from "react";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import Note from "./Components/Note";
import {connect} from 'react-redux'
import AlertInfo from "./Components/AlertInfo";
class App extends Component {
  showForm=()=>{
    if(this.props.Edit){
      return <Form/>
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
          <AlertInfo/>
            <Note/>
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Edit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)
