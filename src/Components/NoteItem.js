import React, { Component } from "react";
import {connect} from 'react-redux'
class NoteItem extends Component {
  action=()=>{
    this.props.Edit();
    this.props.getEditData(this.props.note);
    this.props.notIsAdd()
  }
  deleteData=()=>{
    this.props.getDelete(this.props.note.key);
  }
  render() {
    return (
        <div className="card">
          <div className="card-header" role="tab" id={"s"+this.props.Id}>
          <small className='text-muted'>Click để xem nội dung </small>
            <h5 className="mb-0">
              <a
                data-toggle="collapse"
                data-parent="#accordianId"
                href={"#Content"+this.props.Id}
                aria-expanded="true"
                aria-controls={"Content"+this.props.Id}
              >
                <h3 className="badge rounded-pill bg-secondary text-uppercase fs-1">{this.props.title}</h3>
              </a>
              <div className='btn-group float-right'>
                <div className='btn btn-outline-primary' onClick={()=>this.deleteData()}>Delete</div>
                <div className='btn btn-outline-warning' onClick={()=>this.action()} >Edit</div>
                </div>
            </h5>
          </div>
          <div
            id={"Content"+this.props.Id}
            className="collapse in"
            role="tabpanel"
            aria-labelledby={"s"+this.props.Id}
          >
            <div className="card-body">
            <p>{this.props.noteContent}</p>
           
            </div>
          </div>
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Edit: () => {
      dispatch({type:"Edit"})
    },
    getEditData:(editObject)=>{
      dispatch({type:"GET_EDIT",editObject})
    },
    getDelete:(deleteId)=>{
      dispatch({type:"Delete",deleteId})
    },
    notIsAdd:()=>{
      dispatch({type:"notIsAdd"})
    }
  }
}
export default connect(null, mapDispatchToProps)(NoteItem)
