import React, { Component } from 'react'
import { HashRouter,Route,Switch} from 'react-router-dom'
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Sign from './pages/reg/Reg'
import Search from './pages/search/Search'
import Maps from './pages/map/Maps.js'
import City from './pages/city/City'
import store from './store'
import { Provider } from 'react-redux'



 

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <HashRouter>
                <Switch>
                <Route path='/' exact component={Nav}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/sign' component={Sign}></Route>
                <Route path='/search' component={Search}></Route>
                <Route path='/map' component={Maps}></Route>
                <Route path='/city' component={City}></Route>
                <Route  component={Nav}></Route>
                </Switch>
            </HashRouter>
            </Provider>
        )
    }
}
