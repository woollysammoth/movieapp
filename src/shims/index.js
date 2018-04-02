import { Navigation } from 'react-native-navigation';
import config from '../override';

module.exports = {
	initShims: function(){
		var clonedShowLightBox = Navigation.showLightBox;

		Navigation.showLightBox = function(params){
		  params = Object.assign(params, config.lightBox);
		  clonedShowLightBox(params);
		};
	}
}