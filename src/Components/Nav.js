import React, { Component } from "react";
import {connect} from 'react-redux';
class Nav extends Component {
  handleAdd=(event)=>{
    event.preventDefault()
    this.props.status()
    this.props.isAdd()
  }
  render() {
    return (
        <div>
             <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="https://www.facebook.com/NothingFormeRN/">
          Home
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="facebook.com" onClick={(event)=>this.handleAdd(event)}>
                Add Note
              </a>
            </li>
          </ul>
        </div>
      </nav>
        </div>
     
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    status:()=>{
      dispatch({type:"Edit"})
    },
    isAdd:()=>{
      dispatch({type:"isAdd"})
    },
  }
}
export default connect(null, mapDispatchToProps)(Nav)
