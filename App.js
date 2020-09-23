import React from 'react';
import Splash from './src/containers/splash/splash';
import Landing from './src/containers/landing/landing';
import Register from './src/containers/register/register';
import store from './src/redux/store/store'
import {Provider} from 'react-redux';
import Onboard from './src/containers/onboard/onboard'

const App = () => {

	return (
		// <Provider store={store}>
			<Landing />
		// </Provider>
		// <Onboard />
	);
};

export default App;
