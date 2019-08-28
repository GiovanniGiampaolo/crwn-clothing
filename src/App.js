import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import HomepageComponent from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignOutPage from './pages/sign-in-sign-up/sign-in-sign-up'

function App() {
    return ( 
        <div>
            <Switch>
                <Route exact path='/' component={HomepageComponent}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInSignOutPage}/>
            </Switch>
        </div>
    )
}

export default App
