import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import HomepageComponent from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignOutPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'
import {auth} from './firebase/firebase.utils'
import {createUserProfileDocument} from '../src/firebase/firebase.utils'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    console.log('snapShot =>', snapShot)
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }, () => {
                        console.log('CURRENT STATE =>', this.state)
                    })
                })
            } else {
                // same to say currentUser to null
                this.setState({currentUser: userAuth})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomepageComponent}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInSignOutPage}/>
                </Switch>
            </div>
        )
    }
}

export default App
