import utils from './utils';
import {Platform} from 'react-native';
import singleConfig from './configs/singleConfig';
import topTabsConfig from './configs/topTabsConfig';
import bottomTabsConfig from './configs/bottomTabsConfig';

let statusBarTextColorScheme = "dark";

const configs = {
  "single": singleConfig,
  "topTabs": topTabsConfig,
  "bottomTabs": bottomTabsConfig
};

const override = {
  type: "bottomTabs",
	animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
	tabsStyle: {
    tabBarBackgroundColor: '#f2f2f2'
  },
  appStyle: {
    navBarTextColor: '#fff',
    navBarBackgroundColor: '#25CCF7'
  },
  drawer: {
    animationType: 'slide-and-scale'
  }
};

const config = utils.merge(configs[override.type], override);

//Determine Status Bar Text Color and Apply it to config
if(config.appStyle && config.appStyle.navBarBackgroundColor){
  statusBarTextColorScheme = utils.isLight(config.appStyle.navBarBackgroundColor) ? "dark" : "light";

  if(config.type == "single" || config.type == "topTabs"){
    config.screen.statusBarTextColorScheme = statusBarTextColorScheme;
  }

  if(config.type == "bottomTabs"){
    config.appStyle.statusBarTextColorScheme = statusBarTextColorScheme;
  }
}

module.exports = {
  override,
  config
};