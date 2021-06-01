import { firebaseConnect } from "../firebaseConnect";
var redux = require("redux");

const noteInitialState = {
  isEdit: false,
  editItem:{},
  isAdd:true,
  alertShow:false,
  alertContent:""
};
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADD":
      firebaseConnect.push(action.getItem);
      console.log("Thêm thành công" + JSON.stringify(action.getItem));
      return state;
    case "Edit":
      return {...state,isEdit:!state.isEdit}
    case "isAdd":
      return {...state,isAdd:true}
    case "notIsAdd":
      return {...state,isAdd:false}
    case "Alert_on":
      return {...state,alertShow:true,alertContent:action.alertContent}
    case "Alert_off":
      return {...state,alertShow:false}
    case "GET_EDIT":
      return {...state,editItem:action.editObject}
    case "Edit_O":
      firebaseConnect.child(action.editObject.key).update({
        title:action.editObject.title,
        noteContent:action.editObject.noteContent
      })  
      console.log("Updae tahnfh công");
      return {...state,editItem:{}}
    case "Delete":
      firebaseConnect.child(action.deleteId).remove()
      return state;
    default:
      return state;
  }
};
var store = redux.createStore(allReducer);
store.subscribe(() => console.log(store.getState()));
export default store;
