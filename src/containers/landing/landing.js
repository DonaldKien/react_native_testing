import React, {useState} from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { Content } from 'native-base';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';


const landing = () => {

    const [form, setForm] = useState({
        email: { emailInput: "", checkEmail: false, boxFocusEmail: false },
        password: { passwordInput: "", checkPassword: false, boxFocusPassword: false }
    })

    const onChangeText = (name, value) => {
        if (name === 'email') {
            setForm({
                ...form,
                [name]: {
                    ...form[name],
                    emailInput: value
                }
            })
        } 
        else if (name === 'password') {
            setForm({
                ...form,
                [name]: {
                    ...form[name],
                    passwordInput: value
                }
            })
        }
        else {
            console.log("onChangeText Function Error!")
        }
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
                        <TextInputBoxEmail>
                            <TextInputLabelEmail>Email</TextInputLabelEmail>
                            <InputTextEmail 
                                onChangeText={(text) => onChangeText('email', text)}
                                value={form.email.emailInput}
                            />
                        </TextInputBoxEmail>
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxPassword>
                        <TextInputLabelPassword>
                            Password
                        </TextInputLabelPassword>
                            <InputTextPassword 
                                secureTextEntry={true}
                                onChangeText={(text) => onChangeText('password', text)}
                                value={form.password.passwordInput}
                            />
                        </TextInputBoxPassword>
                    </TextInputBoxWrapper>

                    <LinkWrapper>
                        <Link onPress={() => {console.log(form.password.passwordInput)}}>Forgot Password</Link>
                    </LinkWrapper>

                    <ButtonWrapper>
                        <ButtonClick inputColor='yellow'>
                            <ButtonText>Sign In</ButtonText>
                        </ButtonClick>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <ButtonClick>
                            <ButtonText onPress={() => {console.log(form.email.emailInput)}}>Register</ButtonText>
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
    color: white;
`;

const TextInputBoxEmail = styled.View`
    border: 1px solid white;
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
    color: white;
`;

const TextInputBoxPassword = styled.View`
    border: 1px solid white;
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