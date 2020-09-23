import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';

const register = () => {

    const termsAndConditions = () => {console.log('terms and conditions')}

    const labels = [
        {key:1, inputLabel: 'Email'},
        {key:2, inputLabel: 'Name of Person in Charge'},
        {key:3, inputLabel: 'Mobile'},
        {key:4, inputLabel: 'Password'},
        {key:5, inputLabel: 'Confirm Password'}
    ];

    return (
        <BackgroundColor>

            <TitleWrapper>
                <Title>Sign Up as Seller</Title>
            </TitleWrapper>

            {labels.map( label => ( 
            <TextInputBoxWrapper key={label.key}>
                <TextInputBox>
                <TextInputLabel>{label.inputLabel}</TextInputLabel>
                    <InputText />
                </TextInputBox>
            </TextInputBoxWrapper>
            ))}

            <LinkWrapper>
                <Link inputColor="#FFA000" onPress={termsAndConditions}>Terms and Conditions</Link>
            </LinkWrapper>

            <ButtonWrapper>
                <ButtonClick inputColor='yellow'>
                    <ButtonText>Register</ButtonText>
                </ButtonClick>
            </ButtonWrapper>
        </BackgroundColor>
    )
}

const TitleWrapper = styled.View`
    margin: 20px auto 10px 10px;
`

const TextInputBoxWrapper = styled.View`
    margin: 10px auto 5px auto;
`

const LinkWrapper = styled.View`
    margin: 10px auto;

`

const ButtonWrapper = styled.View`
    margin: 10px auto;

`

export default register;