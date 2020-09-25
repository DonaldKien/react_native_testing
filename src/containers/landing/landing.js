import React, {useState, useEffect} from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { Content } from 'native-base';
import { BackgroundColor, Title, Logo, TextInputLabel, TextInputBox, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';


const landing = ({navigation}) => {

    const [form, setForm] = useState({
        email: { value: "", onFocus: false, onBlur: false, error: false },
        password: { value: "", onFocus: false, onBlur: false, error: false }
    })

    const onChangeText = (name, value) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value: value
            }
        })
    }

    const boxFocus = (name, value) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                onFocus: value,
                onBlur: !value
            }
        })
    }

    const boxBlur = (name, value) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                onBlur: value,
                onFocus: !value,
                error: !form[name].value ? true : false
            }
        })
    }

    const checkEmailPassword = () => {
        setForm({
            ['email']: {
                ...form['email'],
                error: !form['email'].value ? true : false
            },
            ['password']: {
                ...form['password'],
                error: !form['password'].value ? true : false
            }
        })
    }

    return (
        <>
            <BackgroundColor>

                <Content>
                    <TitleWrapper>
                        <Title inputColor='white'>Welcome!</Title>
                    </TitleWrapper>
                    
                    <LogoWrapper>
                        <Logo source={logo}/>
                    </LogoWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBox boxFocus={form.email.onFocus}>
                            <TextInputLabel checkError={form.email.error}>Email</TextInputLabel>
                            <InputText 
                                onBlur={() => boxBlur('email', true)}
                                onFocus={() => boxFocus('email', true)}
                                onChangeText={(text) => onChangeText('email', text)}
                                value={form.email.emailInput}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />
                        </TextInputBox>
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBox boxFocus={form.password.onFocus}>
                        <TextInputLabel checkError={form.password.error}>
                            Password 
                        </TextInputLabel>
                            <InputText 
                                onBlur={() => boxBlur('password', true)}
                                onFocus={() => boxFocus('password', true)}
                                onChangeText={(text) => onChangeText('password', text)}
                                value={form.password.passwordInput}
                                secureTextEntry={true}
                            />
                        </TextInputBox>
                    </TextInputBoxWrapper>

                    <LinkWrapper>
                        <Link>Forgot Password</Link>
                    </LinkWrapper>

                    <ButtonWrapper>
                        <ButtonClick inputColor='yellow'>
                            <ButtonText onPress={checkEmailPassword}>Sign In</ButtonText>
                        </ButtonClick>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <ButtonClick>
                            <ButtonText onPress={() => navigation.navigate('Register')}>Register</ButtonText>
                        </ButtonClick>
                    </ButtonWrapper>
                </Content>

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

// function mapStateToProps (state) {
//     return { pressLink: state.linkPressed }
// }

// function mapDispatchToProps (dispatch) {
//     return {
//         pressedLink: () => dispatch({type: 'LINKPRESSED'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (landing);

export default landing;