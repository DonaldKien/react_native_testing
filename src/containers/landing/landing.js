import React, {useState, useEffect} from 'react';
import logo from '../../assets/image/logo1.jpg';
import styled from 'styled-components';
import { Content } from 'native-base';
import { BackgroundColor, Title, Logo, TextInputLabel, TextInputBox, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';
import { TextInputBoxComponent, ButtonComponent, LinkComponent, TitleComponent } from '../../components/components';

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

    const signIn = () => {
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
                        <TitleComponent 
                            text='Welcome'
                            inputColor='white'
                        />
                    </TitleWrapper>
                    
                    <LogoWrapper>
                        <Logo 
                            source={logo}
                        />
                    </LogoWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxComponent
                            text='Email'
                            boxFocus={form.email.onFocus}
                            checkError={form.email.error}
                            onBlur={() => boxBlur('email', true)}
                            onFocus={() => boxFocus('email', true)}
                            onChangeText={(text) => onChangeText('email', text)}
                            value={form.email.emailInput}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxComponent 
                            text='Password'
                            boxFocus={form.password.onFocus}
                            checkError={form.password.error}
                            onBlur={() => boxBlur('password', true)}
                            onFocus={() => boxFocus('password', true)}
                            onChangeText={(text) => onChangeText('password', text)}
                            value={form.password.passwordInput}
                            secureTextEntry={true}
                        />
                    </TextInputBoxWrapper>

                    <LinkWrapper>
                        <LinkComponent 
                            text='Forgot Password'
                            onPress={() => {console.log('forgot password')}}
                        />
                    </LinkWrapper>

                    <ButtonWrapper>
                        <ButtonComponent
                            text='Sign In'
                            inputColor='yellow'
                            onPress={signIn}
                        />
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <ButtonComponent
                            text='Register'
                            onPress={() => navigation.navigate('Register')}
                        />
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