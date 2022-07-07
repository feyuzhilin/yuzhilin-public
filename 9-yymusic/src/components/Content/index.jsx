import React, { Component } from "react"
import "./index.css"
export default class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            contentList:[
                { id: 0, text:'内容1'},
                { id: 1, text:'内容2'},
                { id: 2, text:'内容3'},
                { id: 3, text:'内容4'},
                { id: 4, text:'内容5'},
                { id: 5, text:'内容6'},
                { id: 6, text:'内容7'},
                { id: 7, text:'内容8'},
            ]
        }
    }
    render() {
        return (
            <div className="content-wrap">
                {this.state.contentList.map(item=> <p className="item-music" key={item.id}>{item.text}</p>)}
            </div>
        );
    }
}
