import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import HomepageComponent from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignOutPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'
import {auth} from './firebase/firebase.utils'
import {createUserProfileDocument} from '../src/firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUserAction} from './redux/user/user.action'

class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    console.log('snapShot =>', snapShot)
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            }
            // same to say currentUser to null
            this.props.setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomepageComponent}/>
                    <Route path='/shop' component={ShopPage}/>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Route path='/signin' render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInSignOutPage/>}/>
                </Switch>
            </div>
        )
    }
}

const mStP = ({user}) => ({
    currentUser: user.currentUser
})

const mDtP = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUserAction(user))
})

export default connect(mStP, mDtP)(App)
