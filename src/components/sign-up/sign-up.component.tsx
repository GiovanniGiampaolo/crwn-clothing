import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        // @ts-ignore
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    // @ts-ignore
    handleSubmit = async event => {
        event.preventDefault()

        // @ts-ignore
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert('Password don\'t match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (e) {
            console.error('ERROR IN SIGN UP', e)
        }
    }

    handleChange = (event: any) => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render() {

        // @ts-ignore
        const {displayName, email, password, confirmPassword} = this.state

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    {
                        // TODO I NEED TO ADD TYPESCRIPT
                        // @ts-ignore
                        <FormInput type={'text'} name={'displayName'} value={displayName} onChange={this.handleChange}
                                   label={'Display Name'} required/>
                    }
                    {
                        // @ts-ignore
                        <FormInput type={'email'} name={'email'} value={email} onChange={this.handleChange}
                                   label={'email'} required/>
                    }
                    {
                        // @ts-ignore
                        <FormInput type={'password'} name={'password'} value={password} onChange={this.handleChange}
                                   label={'Password'} required/>
                    }
                    {
                        // @ts-ignore
                        <FormInput type={'password'} name={'confirmPassword'} value={confirmPassword}
                                   onChange={this.handleChange} label={'Confirm Password'} required/>
                    }
                    {
                        // @ts-ignore
                        <CustomButton type={'submit'}>SIGN UP</CustomButton>
                    }
                </form>
            </div>
        )
    }
}

export default SignUp
