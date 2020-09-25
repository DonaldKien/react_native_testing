import React, {useState} from 'react';
import { Content } from 'native-base';
import styled from 'styled-components';
import { Image, TouchableOpacity, View } from 'react-native';
import { BackgroundColor, Title, Subtitle, DefaultImage, TextInputBox, ImageInput, ImageTouchable, TextInputBoxLarge, TextInputLabel, InputText, ButtonClick2, ButtonText } from '../../styling/styling';
import ImagePicker from 'react-native-image-picker';
import imageDefault from '../../assets/image/addImage.png'

const onboard = () => {
    
	const [avatarSource, setAvatarSource] = useState(null)

	const selectImage = async() => {
		
		ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
			console.log('Response = ', response);
			
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				setAvatarSource(response.uri)			
			}
		});
    }
    
    return (
        <BackgroundColor>
            <Content>
            <TitleBarWrapper>
                <Title>Welcome Onboard</Title>
                <Subtitle>You are almost there</Subtitle>
            </TitleBarWrapper>

            <ChannelImageWrapper>
                <ImageTouchable onPress={selectImage}>
                {
                    avatarSource ? 
                    <ImageInput source={{uri:avatarSource}}/> :
                    <DefaultImage source={imageDefault}/>
                }
            </ImageTouchable>
                <Subtitle>Channel Image</Subtitle>
            </ChannelImageWrapper>

            <TextInputBoxWrapper>
                <TextInputBox>
                    <TextInputLabel>Display name / Company name</TextInputLabel>
                        <InputText />
                </TextInputBox>
            </TextInputBoxWrapper>

            <TextInputBoxWrapperLarge>
                <TextInputBoxLarge>
                    <TextInputLabel>Company Description</TextInputLabel>
                        <InputText multiline={true} numberOfLines={2}/>
                </TextInputBoxLarge>
            </TextInputBoxWrapperLarge>

            <ButtonWrapper>
                <ButtonClick2>
                    <ButtonText>Continue</ButtonText>
                </ButtonClick2>
            </ButtonWrapper>
            </Content>
        </BackgroundColor>
    )
}

const TitleBarWrapper = styled.View`
    flex: 1;
    padding-top: 5px;
    padding-left: 10px;
`

const ChannelImageWrapper = styled.View`
    margin-top: 15px;   
    flex: 3;
    justify-content: center;
    align-items: center;
`
const TextInputBoxWrapper = styled.View`
    margin-top: 15px;   
    flex: 1;
    align-items: center;
`

const TextInputBoxWrapperLarge = styled.View`
    margin-top: 15px;   
    flex: 2;
    align-items: center;
`

const ButtonWrapper = styled.View`
    flex: 3;
    align-items: center;
    padding-top: 20px;

`

export default onboard;