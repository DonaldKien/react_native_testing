import React, {useState} from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { Content } from 'native-base';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';


const landing = () => {

    // Email
    // const [form, setForm] = useState({
    //     email: { emailInput: "email", checkEmail: false, boxFocusEmail: false },
    //     password: { passwordInput: "jiji", checkPassword: false, boxFocusPassword: false }
    // })

    const [form, setForm] = useState(
        {emailInput: "", passwordInput: ""}
    )

    const onChange = event => {
        const { name, value } = event.target;

        setForm(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        console.log(form.emailInput.value)
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
                                name="emailInput"
                                onChange={onChange}
                                value={form.emailInput.value}
                            />
                        </TextInputBoxEmail>
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxPassword>
                        <TextInputLabelPassword>
                            Password
                        </TextInputLabelPassword>
                            <InputTextPassword 
                                name="passwordInput" 
                                secureTextEntry={true}
                                onChange={onChange}
                                value={form.passwordInput.value}
                            />
                        </TextInputBoxPassword>
                    </TextInputBoxWrapper>

                    <LinkWrapper>
                        <Link onPress={() => {console.log("forgot password")}}>Forgot Password</Link>
                    </LinkWrapper>

                    <ButtonWrapper>
                        <ButtonClick inputColor='yellow'>
                            <ButtonText>Sign In</ButtonText>
                        </ButtonClick>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <ButtonClick>
                            <ButtonText onPress={() => {console.log("register")}}>Register</ButtonText>
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