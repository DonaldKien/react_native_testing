import React from 'react';
import styled from 'styled-components';
import { BackgroundColor, Title, Logo, TextInputLabel, TextInputBox, InputText, Link, ButtonClick, ButtonText, ButtonClick2, TextInputBoxLarge, Subtitle } from '../styling/styling';

export const TextInputBoxComponent = props => {
    return (
        <TextInputBox boxFocus={props.boxFocus}>
            <TextInputLabel checkError={props.checkError}>{props.text}</TextInputLabel>
            <InputText 
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onChangeText={props.onChangeText}
                value={props.value}
                keyboardType={props.keyboardType}
                textContentType={props.textContentType}
                secureTextEntry={props.secureTextEntry}
            />
        </TextInputBox>
    )
}

export const ButtonComponent = props => {
    return (
        <ButtonClick inputColor={props.inputColor}>
            <ButtonText onPress={props.onPress}>{props.text}</ButtonText>
        </ButtonClick>
    )
}

export const LinkComponent = props => {
    return (
        <Link inputColor={props.inputColor} onPress={props.onPress}>
            {props.text}
        </Link>
    )
}

export const TitleComponent = props => {
    return (
        <Title inputColor={props.inputColor}>{props.text}</Title>
    )
}

export const ButtonSmallComponent = props => {
    return (
        <ButtonClick2>
            <ButtonText>{props.text}</ButtonText>
        </ButtonClick2>
    )
}

export const TextInputBoxAreaComponent = props => {
    return (
        <TextInputBoxLarge>
            <TextInputLabel>{props.text}</TextInputLabel>
                <InputText 
                    multiline={props.multiline} 
                    numberOfLines={props.numberOfLines}
                />
        </TextInputBoxLarge>
    )
}

export const SubtitleComponent = props => {
    return (
        <Subtitle>{props.text}</Subtitle>
    )
}