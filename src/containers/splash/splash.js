import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/logo1.jpg';

const App = () => {

	return (
		<>
			<BackgroundColor>
				<Logo source={logo}/>
			</BackgroundColor>
		</>
	);
};

const Logo = styled.Image`
	margin: auto;
	height: 200px;
	width: 200px;
`;

const BackgroundColor = styled.View`
	background-color: #121C2F;
	flex: 1;
`;

export default App;
