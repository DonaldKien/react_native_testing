import React, {useState, useEffect} from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { Content } from 'native-base';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';


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

    const checkEmailPassword = () => {
        setForm({
            'email': {
                ...form['email'],
                error: form.email.onBlur && !form.email.value ? true : false
            },
            'password': {
                ...form['password'],
                error: form.password.onBlur && form.password.value.length < 6 ? true : false
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
                        <TextInputBoxEmail boxFocus={form.email.onFocus}>
                            <TextInputLabelEmail checkEmailError={form.email.error}>Email</TextInputLabelEmail>
                            <InputTextEmail 
                                onBlur={() => boxFocus('email', false)}
                                onFocus={() => boxFocus('email', true)}
                                onChangeText={(text) => onChangeText('email', text)}
                                value={form.email.emailInput}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />
                        </TextInputBoxEmail>
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxPassword boxFocus={form.password.onFocus}>
                        <TextInputLabelPassword checkPasswordError={form.password.error}>
                            Password {form.password.error ? "- 6 letters required" : null}
                        </TextInputLabelPassword>
                            <InputTextPassword 
                                onBlur={() => boxFocus('password', false)}
                                onFocus={() => boxFocus('password', true)}
                                onChangeText={(text) => onChangeText('password', text)}
                                value={form.password.passwordInput}
                                secureTextEntry={true}
                            />
                        </TextInputBoxPassword>
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

// test with local state -----------------------

// Email

const InputTextEmail = styled.TextInput`
    color: white;
    font-size: 22px;
`;

const TextInputLabelEmail = styled.Text`
    color: ${props => props.checkEmailError ? "red" : "white"};
`;

const TextInputBoxEmail = styled.View`
    border: 1px solid ${props => props.boxFocus ? "blue" : "white" };
    height: 70px;
    width: 300px;
    border-radius: 10px;
    padding: 5px 10px;
`;

//Password

const InputTextPassword = styled.TextInput`
    color: white;
    font-size: 22px;
`;

const TextInputLabelPassword = styled.Text`
    color: ${props => props.checkPasswordError ? "red" : "white"};
`;

const TextInputBoxPassword = styled.View`
    border: 1px solid ${props => props.boxFocus ? "blue" : "white" };
    height: 70px;
    width: 300px;
    border-radius: 10px;
    padding: 5px 10px;
`;

// -----------------------------------------------

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