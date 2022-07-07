import React, { Component } from "react"
import "./index.css"
export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            headerList : [
                {id:0, text:'发现音乐'},
                {id:1, text:'我的音乐'},
                {id:2, text:'关注'},
                {id:3, text:'商城'},
            ]
        }
    }
    render() {
        return (
            <div className="header-wrap">
                <div className="header">
                    {this.state.headerList.map(item=> <p className="item-link" key={item.id}>{item.text}</p>)}
                </div>
            </div>
        );
    }
}
