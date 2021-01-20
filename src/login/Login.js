import React, { useState } from 'react'
import { StyledGoldButton } from '../styled/Buttons/StyledGoldButton'
import { StyledTextInput } from '../styled/LoginFormStyled/StyledInputs/StyledTextInput'
import styled from 'styled-components'

const FormStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
        input {
            justify-self: center;
            width: 92%;
        }
        p {
            font-size: 12px;
            margin: 0;
            color: lightgray;
            opacity: .5;
            text-align: center;
        }
`
function Login(){
    
    const [text, setText] = useState({
        email: '',
        password: '',
        checkbox: false
    })
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            setText({[name]: checked})
        :   setText({[name]: value}) 
    }
    return (
        <FormStyle>
            <form onSubmit={(event) => handleSubmit(event)}>
                <br />
                <StyledTextInput type={'text'} labels='email' value={text.email} onChange={handleChange} placeholder={'Email adress' }name={'email'}/>
                <p>We will never share your password with anyone.</p>
                <StyledTextInput type={'password'} labels='password' value={text.password} onChange={handleChange} placeholder={'Password'} name={'password'} />
                <StyledGoldButton row='end' onClick={(event) => handleSubmit(event)} text={'Submit'} />
            </form>
        </FormStyle>
    )
}
Login.defaultProps = {
    formTextBelow: 'We\'ll never share your email with anyone else.',
    formEmailLabelText: 'Email address',
    formPasswordLabelText: 'Password',
    submitButtonText: 'Submit'
}

export default Login