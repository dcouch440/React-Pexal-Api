import React, {useState} from 'react';
import {StyledGoldButton} from './StyledGoldButton';
import {StyledTextInput} from './StyledTextInput';
import styled from 'styled-components';

const FormStyle = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
        input {
            justify-self: center;
            width: 92%;
        }
        p {
            padding: 2px 12px;
            font-size: 12px;
            margin: 0;
            color: lightgray;
            opacity: .5;
            text-align: center;
        }
`;

function StyledLogin({color, backgroundColor}){
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
            setText({[name]: checked}):
            setText({[name]: value})
    }
    const formStyle = {
        color: color,
        backgroundColor: backgroundColor,
    }
    return (
        <FormStyle>
            <form style={formStyle} onSubmit={(event) => handleSubmit(event)}>
                <br />
                <StyledTextInput type={'text'} labels='email' value={text.email} onChange={handleChange} placeholder={'Email address' } name={'email'}/>
                <p>We will never share your password with anyone.</p>
                <StyledTextInput type={'password'} labels='password' value={text.password} onChange={handleChange} placeholder={'Password'} name={'password'} />
                <StyledGoldButton row='end' onClick={(event) => handleSubmit(event)} text={'Submit'} />
            </form>
        </FormStyle>
    );
}

export default StyledLogin;