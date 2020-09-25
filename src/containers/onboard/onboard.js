import React, {useState} from 'react';
import { Content } from 'native-base';
import styled from 'styled-components';
import { Image, TouchableOpacity, View } from 'react-native';
import { BackgroundColor, Title, Subtitle, DefaultImage, TextInputBox, ImageInput, ImageTouchable, TextInputBoxLarge, TextInputLabel, InputText, ButtonClick2, ButtonText } from '../../styling/styling';
import ImagePicker from 'react-native-image-picker';
import imageDefault from '../../assets/image/addImage.png';
import { ButtonSmallComponent, TextInputBoxAreaComponent, TextInputBoxComponent, TitleComponent, SubtitleComponent } from '../../components/components';

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
                    <TitleComponent
                        text='Welcome Onboard'
                    />
                    <SubtitleComponent
                        text='You are almost there'
                    />
                </TitleBarWrapper>

                <ChannelImageWrapper>
                    <ImageTouchable onPress={selectImage}>
                    {
                        avatarSource ? 
                        <ImageInput source={{uri:avatarSource}}/> :
                        <DefaultImage source={imageDefault}/>
                    }
                </ImageTouchable>
                    <SubtitleComponent
                        text='Channel Image'
                    />
                </ChannelImageWrapper>

                <TextInputBoxWrapper>
                    <TextInputBoxComponent 
                        text='Display name / Company name'
                    />
                </TextInputBoxWrapper>

                <TextInputBoxWrapperLarge>
                    <TextInputBoxAreaComponent 
                        text='Company Description'
                        multiline={true} 
                        numberOfLines={2}
                    />
                </TextInputBoxWrapperLarge>

                <ButtonWrapper>
                    <ButtonSmallComponent
                        text='Continue'
                    />
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