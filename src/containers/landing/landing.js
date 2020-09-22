import React from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';



const landing = () => {

    const testing = () => {console.log('pressed');}

    return (
        <>
            <BackgroundColor>

                <TitleWrapper>
                    <Title inputColor='white'>Welcome</Title>
                </TitleWrapper>
                
                <LogoWrapper>
                    <Logo source={logo}/>
                </LogoWrapper>

                <TextInputBoxWrapper>
                    <TextInputBox>
                        <TextInputLabel>Email</TextInputLabel>
                        <InputText />
                    </TextInputBox>
                </TextInputBoxWrapper>

                <TextInputBoxWrapper>
                    <TextInputBox>
                        <TextInputLabel>Password</TextInputLabel>
                        <InputText />
                    </TextInputBox>
                </TextInputBoxWrapper>

                <LinkWrapper>
                    <Link onPress={testing}>Forgot Password</Link>
                </LinkWrapper>

                <ButtonWrapper>
                    <ButtonClick inputColor='yellow'>
                        <ButtonText>Sign In</ButtonText>
                    </ButtonClick>
                </ButtonWrapper>

                <ButtonWrapper>
                    <ButtonClick>
                        <ButtonText>Register</ButtonText>
                    </ButtonClick>
                </ButtonWrapper>

            </BackgroundColor>
        </>
    )
}

const TitleWrapper = styled.View`
    margin: 30px auto;
`

const LogoWrapper = styled.View`
    margin: 10px auto;
`
const TextInputBoxWrapper = styled.View`
    margin: 10px auto 5px auto;
`

const ButtonWrapper = styled.View`
    margin: 10px auto 0px auto;
`

const LinkWrapper = styled.View`
    margin: 5px auto;

`

export default landing;