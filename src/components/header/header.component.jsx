import React from 'react'
import './header.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

// @ts-ignore
const Header = ({currentUser}) => (
    <div className='header'>

        {/* LOGO */}
        <Link to={"/"} className="logo-container">
            <Logo className="logo"/>
        </Link>

        {/* OPTIONS CONTAINER */}
        <div className="options">
            <Link className="option" to={'/shop'}>
                SHOP
            </Link>

            <Link className="option" to={'/contact'}>
                CONTACT
            </Link>

            {
                currentUser === null
                    ? <Link className="option" to={'/signin'}>SIGN IN</Link>
                    : <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            }

        </div>
    </div>
)

const mStP = state => ({
    currentUser: state.user.currentUser
})

export default connect(mStP)(Header)
