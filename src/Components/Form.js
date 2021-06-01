import React, { Component } from "react";
import {connect} from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:"",
      noteContent:"",
      key:""
    }
  }

  componentWillMount(){
    if(this.props.item){
      this.setState({
        title:this.props.item.title,
        noteContent:this.props.item.noteContent,
        key:this.props.item.key
      });
    }
  }

  dataInput = (data) => {
    const name = data.target.name;
    const value = data.target.value;
    this.setState({
      [name]: value,
    });
  };
  getData = (title, noteContent) => {
    if(this.state.key){
      var editObject={};
      editObject.key=this.state.key;
      editObject.title=this.state.title;
      editObject.noteContent=this.state.noteContent;
      this.props.editDataStore(editObject)
      this.props.status()
      this.props.Alert_on("Sửa thành công")
    }
    else{
      var item = {};
      item.title = title;
      item.noteContent = noteContent;
      this.props.add(item);
      this.props.Alert_on("Thêm mới thành công")
    }
    
  };
  title=()=>{
    if(this.props.isAdd){
      return <h4>Thêm Mới</h4>;
    }
    else{
      return <h4>Sửa</h4>;
    }
  }
  render() {
    return (
      <div className="col-4">
        <div className="form-group">
        {this.title()}
          <input
          defaultValue={this.props.item.title}
            onChange={(data) => this.dataInput(data)}
            type="text"
            name="title"
            className="form-control"
            placeholder="Tieu de Note"
            aria-describedby="helpId"
          />
          <small className="text-muted ">Điền nội dung</small> <br />
          <label>Nội dung Note</label>
          <textarea
            defaultValue={this.props.item.noteContent}
            onChange={(data) => this.dataInput(data)}
            className="form-control"
            name="noteContent"
            rows={3}
          />
          <small className="text-muted">Điền nội dung</small>
          <button
            onClick={() =>
              this.getData(this.state.title, this.state.noteContent)
            }
            type="reset"
            className="form-control btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (getItem) => {
      dispatch({type:"ADD",getItem})
    },
    status:()=>{
      dispatch({type:"Edit"})
    },
    editDataStore:(editObject)=>{
      dispatch({
        type:"Edit_O",
        editObject
      })
    },
    Alert_on:(alertContent)=>{
      dispatch({
        type:"Alert_on",alertContent
      })
    },
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    item: state.editItem,
    isAdd:state.isAdd,
    notIsAdd:state.notIsAdd
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)
