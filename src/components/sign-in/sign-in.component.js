import React from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogleMethod} from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor() {
        // @ts-ignore
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event: any) => {
        event.preventDefault()

        // @ts-ignore
        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email,password)
        }
        catch (e) {
            console.error('ERROR SIGNING IN WITH EMAIL AND PASSWORD', e.message)
        }


        this.setState({email: '', password: ''})
    }

    handleChange = (event: any) => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {

        // @ts-ignore
        const {email, password} = this.state

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label={'email'} name='email' type={'email'} value={email} required
                               handleChange={this.handleChange}/>

                    <FormInput label={'password'} name='password' type="password" value={password} required
                               handleChange={this.handleChange}/>
                </form>

                <div className='buttons'>
                    {
                        // @ts-ignore
                        <CustomButton type={'Submit'}>SIGN IN</CustomButton>
                    }
                    <CustomButton onClick={signInWithGoogleMethod} isGoogleSignin>
                        Sign in with Google
                    </CustomButton>
                </div>

            </div>
        )
    }
}

export default SignIn
