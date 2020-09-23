import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import { BackgroundColor, Title, Subtitle, InputImage, Logo, TextInputBox, TextInputBoxLarge, TextInputLabel, InputText, Link, ButtonClick, ButtonClick2, ButtonText } from '../../styling/styling';
import Arrow from 'react-native-arrow'

const onboard = () => {
    
    return (
        <BackgroundColor>

            <TitleBarWrapper>
                <Title>Welcome Onboard</Title>
                <Subtitle>You are almost there</Subtitle>
            </TitleBarWrapper>

            <ChannelImageWrapper>
                <InputImage />
                <Subtitle>Channel Image</Subtitle>
            </ChannelImageWrapper>

            <TextInputBoxWrapper>
                <TextInputBox>
                <TextInputLabel>Display name / Company name</TextInputLabel>
                    <InputText />
                </TextInputBox>

                <TextInputBoxLarge>
                <TextInputLabel>Company Description</TextInputLabel>
                    <InputText multiline={true} numberOfLines={2}/>
                </TextInputBoxLarge>
            </TextInputBoxWrapper>

            <ButtonWrapper>
                <ButtonClick2>
                    <ButtonText>Continue</ButtonText>
                </ButtonClick2>
            </ButtonWrapper>

        </BackgroundColor>
    )
}

const TitleBarWrapper = styled.View`
    flex: 1;
    padding-top: 5px;
    padding-left: 10px;
`

const ChannelImageWrapper = styled.View`
    flex: 3;
    justify-content: center;
    align-items: center;
`
const TextInputBoxWrapper = styled.View`
    flex: 3;
    margin: 10px auto auto auto;
    justify-content: space-between;
`

const ButtonWrapper = styled.View`
    flex: 3;
    align-items: center;
    padding-top: 20px;

`

export default onboard;