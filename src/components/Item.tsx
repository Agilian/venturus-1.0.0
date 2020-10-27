import React, { Component } from 'react';
interface IMyComponentState {
        num: any
        isSaved: boolean   
}
interface IMyComponentProps {
    state: {
        num: any
        isSaved: boolean    }
}
export default class Item extends Component <IMyComponentProps, IMyComponentState>{

    
    
    constructor(props:any){
        super(props);
        this.state = {
            num: props.num,
            isSaved: false
        }
    }
    saveNum = (ev :any) => {
        // save this number in localStorage
        // get the item from localstorage
        // if exists,   parse it
        //              add current number to array
        //              remove duplicates
        //              update localStorage array
        // if not exists
        //              create a new array with the number
        //              create item in localstorage
        // update state with isSaved
        let nums = localStorage.getItem('myNums');
        let arr = [];
        if(nums){
            arr = JSON.parse(nums);
            arr.push(this.state.num);
            arr = Array.from(new Set(arr));
            localStorage.setItem('myNums', JSON.stringify(arr));
        }else{
            arr=[];
            arr.push(this.state.num);
            localStorage.setItem('myNums', JSON.stringify(arr));
        }
        this.setState({isSaved:true});
    }
    
    componentDidMount(){
        // get the array from localstorage
        // parse the array
        // if the number is included in the array
        //update the state for isSaved
        let nums = localStorage.getItem('myNums');
        let arr = [];
        if(nums){
            arr = JSON.parse(nums);
            if( arr.includes(this.state.num) ){
                this.setState({isSaved: true});
            }
        }
    }
    
    render(){
        return (
            <p className={ this.state.isSaved ? "saved" : ""} >Hi. My number is { this.state.num }.   <button onClick={this.saveNum}>Click to remember me</button></p>
        );
    }
}