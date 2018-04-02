/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './store/configureStore';
import { override, config } from './override';
import { initShims } from './shims';

const store = configureStore();

initShims();
registerScreens(store, Provider);

class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {

  		//Build Tab Config Obj
  		const tabs = [{
    		label: 'Home',
    		screen: 'app.Home',
    		title: 'Home',
			icon: iconsMap['ios-film-outline'],
			selectedIcon: iconsMap['ios-film'],
    		navigatorStyle: {},
    		navigatorButtons: {}
  		}];

        //Initiate App
        Navigation[config.startCtor]({
          ...config,
          tabs,
          passProps: {}
        });

	}
}

export default App;