import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import HomepageComponent from './pages/homepage/homepage.component'
import ShopPage from '../src/components/shop/shop.component'

function App() {
    return ( 
        <div>
            <Switch>
                <Route exact path='/' component={HomepageComponent}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    )
}

export default App
