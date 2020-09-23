import React, {useState} from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { Content } from 'native-base';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';


const landing = () => {

    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState(false);
    const [boxFocus, setBoxFocus] = useState(false);

    const testing = () => {console.log(password)};

    const blurBox = () => {
        password.length < 6 ? setCheckPassword(false) : setCheckPassword(true);
        setBoxFocus(false);
    };

    const focusBox = () => {
        setBoxFocus(true);
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
                        <TextInputBox>
                            <TextInputLabel>Email</TextInputLabel>
                            <InputText />
                        </TextInputBox>
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxState boxFocus={boxFocus}>
                        <TextInputLabelState boxFocus={boxFocus} checkPassword={checkPassword}>
                            Password {!checkPassword ? '- 6 letters required' : null }
                        </TextInputLabelState>
                            <InputTextState 
                                onFocus={focusBox}
                                onBlur={blurBox} 
                                onChangeText={text => setPassword(text)} 
                                value={password} 
                                secureTextEntry={true}
                            />
                        </TextInputBoxState>
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
                            <ButtonText onPress={testing}>Register</ButtonText>
                        </ButtonClick>
                    </ButtonWrapper>
                </Content>

            </BackgroundColor>
        </>
    )
}

// test with local state -----------------------

const TextInputLabelState = styled.Text`
    color: ${(props) => !props.checkPassword ? "red" : "white"};
`;

const InputTextState = styled.TextInput`
    color: white;
    font-size: 22px;
`;

const TextInputBoxState = styled.View`
    border: 1px solid ${(props) => props.boxFocus ? "#abfbff" : "white"};
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