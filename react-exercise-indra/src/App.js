import React from "react";
import Axios from 'axios'

import "./App.css";

import Content2 from './page/content_2'
import Home from './page/home'
import NotFound from './page/404notfound'
import Login from './page/login'
import Register from './page/register'

import Navigation from "./component/navbar";
import Caro from './component/carousel'
import Todo from './component/toDo_list/ToDo_List'
import News from './component/news_api/news'
import TableJson from './component/table_json/table_json'
import Count from './component/tambah_kurang/count'

import {Switch, Route} from 'react-router-dom'

import {login} from './action'

import{connect} from 'react-redux'


class App extends React.Component {
  componentDidMount(){
    Axios.get(`http://localhost:2000/userLogin?username=${localStorage.username}`)
    .then((res)=> {this.props.login(res.data[0])})
    .catch((err)=> console.log(err))
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/carousel' component={Caro}/>
        <Route path='/content_2' component={Content2}/>
        <Route path='/ToDo_list' component={Todo}/>
        <Route path='/news' component={News}/>
        <Route path='/table_json' component={TableJson}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/count' component={Count}/>
        <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
export default connect(null, {login})(App)
