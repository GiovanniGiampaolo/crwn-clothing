import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {

    constructor() {
        // @ts-ignore
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (event : any) => {
        const {value, name} = event.target
        this.setState({[name]:value})
    }

    render() {

        // @ts-ignore
        const {email, password} = this.state

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label={'email'} name='email' type={'email'} value={email} required handleChange={this.handleChange}/>

                    <FormInput label={'password'} name='password' type="password" value={password} required handleChange={this.handleChange}/>
                </form>

                <CustomButton type={'Submit'}>SIGN IN</CustomButton>
            </div>
        )
    }
}

export default SignIn
