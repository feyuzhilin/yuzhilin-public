import { Component } from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Banner from "./components/Banner"
export default class App extends Component{
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Content></Content>
      </div>
    );
  }
}
