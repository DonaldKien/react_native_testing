import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components';
import { BackgroundColor, Title, Logo, TextInputBox, TextInputLabel, InputText, Link, ButtonClick, ButtonText } from '../../styling/styling';
import { ButtonComponent, LinkComponent, TitleComponent, TextInputBoxComponent } from '../../components/components';

const register = ({ navigation }) => {

    const termsAndConditions = () => {console.log('terms and conditions')}

    const [form, setForm] = useState([
        {email: ""},
        {PIC_name: ""},
        {mobile: ""},
        {password: ""},
        {confirm_password: ""}
    ])

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
                <TitleComponent 
                    text='Sign Up as Seller'
                />
            </TitleWrapper>

            {labels.map( label => ( 
            <TextInputBoxWrapper key={label.key}>
                <TextInputBoxComponent 
                    text={label.inputLabel}
                />
            </TextInputBoxWrapper>
            ))}

            <LinkWrapper>
                <LinkComponent 
                    text='Terms and Conditions'
                    inputColor="#FFA000"
                    onPress={termsAndConditions}
                />
            </LinkWrapper>

            <ButtonWrapper>
                <ButtonComponent 
                    text='Register'
                    inputColor='yellow'
                    onPress={() => navigation.navigate('Onboard')}
                />
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