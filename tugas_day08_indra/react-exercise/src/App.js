import React from "react";
import "./App.css";
import Navigation from "./component/navbar";
import {Switch, Route} from 'react-router-dom'
import Content1 from './page/content_1'
import Content2 from './page/content_2'
import Home from './page/home'
import Caro from './component/carousel'
import Todo from './component/toDo_list/ToDo_List'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: "Orang Asing",
  //   };
  // }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/carousel' component={Caro}/>
        <Route path='/content_2' component={Content2}/>
        <Route path='/ToDo_list' component={Todo}/>
        </Switch>
      </div>
    );
  }
}
export default App;
