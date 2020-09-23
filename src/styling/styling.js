import styled from 'styled-components';
import { connect } from 'react-redux';

export const BackgroundColor = styled.View`
	background-color: #121C2F;
	flex: 1;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: 700;
    color: ${props => props.inputColor || "#FFA000"};
`;

export const Subtitle = styled.Text`
    font-size: 15px;
    color: white;
`;

export const Logo = styled.Image`
    height: 200px;
    width: 200px;
`;

export const TextInputBox = styled.View`
    border: 1px solid white;
    height: 70px;
    width: 300px;
    border-radius: 10px;
    padding: 5px 10px;
`;

export const TextInputBoxLarge = styled.View`
    border: 1px solid white;
    height: 100px;
    width: 300px;
    border-radius: 10px;
    padding: 5px 10px;
`;

export const TextInputLabel = styled.Text`
    color: ${props => props.inputColor || "white"};
`;

export const InputText = styled.TextInput`
    color: white;
    font-size: 22px;
`;

export const Link = styled.Text`
    color: ${props => props.inputColor || "white"};
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.inputColor || "white"};
`;

export const ButtonClick = styled.TouchableOpacity`
    background-color: ${props => props.inputColor || "white"};
    width: 250px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
`;

export const ButtonClick2 = styled.TouchableOpacity`
    background-color: ${props => props.inputColor || "white"};
    width: 200px;
    height: 50px;
    border-radius: 15px;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`;

export const InputImage = styled.View`
    height: 150px;
    width: 150px;
    background-color: grey;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px;
    border-color: white;
`;