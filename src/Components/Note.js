import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { firebaseConnect } from "../firebaseConnect";
class Note extends Component {
    constructor(props) {
        super(props);
        this.state={
            firebaseData:""
        }
    }
    componentDidMount(){
        firebaseConnect.on('value',(notes)=>{
            var arrayData=[]
            notes.forEach(value=>{
                const key=value.key;
                const title=value.val().title;
                const noteContent=value.val().noteContent;
                arrayData.push({
                    key:key,
                    title:title,
                    noteContent:noteContent
                })
            })
            this.setState({firebaseData:arrayData})
        })
    }
    getData=()=>{
        if(this.state.firebaseData){
            return this.state.firebaseData.map((value,key)=>{
                return (<NoteItem note={value} key={key} Id={key} title={value.title} noteContent={value.noteContent}/>)
            })
        }
        
    }
    render() {
        return (
            <div className='col'>
             <div id="accordianId" role="tablist" aria-multiselectable="true">
             {this.getData()}
             </div>
            </div>
        );
    }
}

export default Note;