import React from "react";

import "./App.css";

import Content1 from './page/content_1'
import Content2 from './page/content_2'
import Home from './page/home'
import NotFound from './page/404notfound'

import Navigation from "./component/navbar";
import Caro from './component/carousel'
import Todo from './component/toDo_list/ToDo_List'
import News from './component/news_api/news'
import TableJson from './component/table_json/table_json'

import {Switch, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/carousel' component={Caro}/>
        <Route path='/content_2' component={Content2}/>
        <Route path='/ToDo_list' component={Todo}/>
        <Route path='/content_1' component={Content1}/>
        <Route path='/news' component={News}/>
        <Route path='/table_json' component={TableJson}/>
        <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
export default App;
