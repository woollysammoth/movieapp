/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Home from './components/screens/home';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.Home', () => Home, store, Provider);
}