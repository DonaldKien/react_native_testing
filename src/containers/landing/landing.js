import React, {useState} from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { Content } from 'native-base';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';


const landing = () => {

    // Email
    const [email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState(false);
    const [boxFocusEmail, setBoxFocusEmail] = useState(false);

    const focusBoxEmail = () => {
        setBoxFocusEmail(true);
    }
    
    // Password
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState(false);
    const [boxFocusPassword, setBoxFocusPassword] = useState(false);

    const focusBoxPassword = () => {
        setBoxFocusPassword(true);
    }

    const blurBox = () => {
        email.length ? setCheckEmail(true) : setCheckEmail(false);
        password.length < 6 ? setCheckPassword(false) : setCheckPassword(true);
        setBoxFocusEmail(false);
        setBoxFocusPassword(false);
    };

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
                        <TextInputBoxEmail boxFocusEmail={boxFocusEmail}>
                            <TextInputLabelEmail checkEmail={checkEmail}>Email</TextInputLabelEmail>
                            <InputTextEmail 
                                onFocus={focusBoxEmail} 
                                onBlur={blurBox} 
                                onChangeText={text => setEmail(text)} 
                                value={email}
                            />
                        </TextInputBoxEmail>
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxPassword boxFocusPassword={boxFocusPassword}>
                        <TextInputLabelPassword checkPassword={checkPassword}>
                            Password {!checkPassword ? '- 6 letters required' : null }
                        </TextInputLabelPassword>
                            <InputTextPassword 
                                onFocus={focusBoxPassword}
                                onBlur={blurBox} 
                                onChangeText={text => setPassword(text)} 
                                value={password} 
                                secureTextEntry={true}
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
    color: ${(props) => props.checkEmail ? "white" : "red"};
`;

const TextInputBoxEmail = styled.View`
    border: 1px solid ${(props => props.boxFocusEmail ?  "#abfbff" : "white")};
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
    color: ${(props) => props.checkPassword ? "white" : "red"};
`;

const TextInputBoxPassword = styled.View`
    border: 1px solid ${(props) => props.boxFocusPassword ? "#abfbff" : "white"};
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