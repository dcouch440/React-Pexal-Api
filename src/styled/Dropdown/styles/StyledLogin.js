import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledGoldButton } from '../StyledGoldButton';
import { StyledTextInput } from './StyledTextInput';

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

function StyledLogin ({ color, backgroundColor }){
    const [text, setText] = useState({
        email: '',
        password: '',
        checkbox: false
    });

    const handleSubmit = event => {
        event.preventDefault();
    };
    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        type === "checkbox"
            ? setText({ [name]: checked })
            : setText({ [name]: value });
    };
    const formStyle = {
        color: color,
        backgroundColor: backgroundColor,
    };
    return (
        <FormStyle>
            <form
                style={formStyle}
                onSubmit={event => handleSubmit(event)}
            >
                <br />
                <StyledTextInput
                    labels='email'
                    name={'email'}
                    placeholder={'Email address' }
                    type={'text'}
                    value={text.email}
                    onChange={handleChange}
                />
                <p>We will never share your password with anyone.</p>
                <StyledTextInput
                    labels='password'
                    name={'password'}
                    placeholder={'Password'}
                    type={'password'}
                    value={text.password}
                    onChange={handleChange}
                />
                <StyledGoldButton
                    row='end'
                    text={'Submit'}
                    onClick={event => handleSubmit(event)}
                />
            </form>
        </FormStyle>
    );
}

export default StyledLogin;