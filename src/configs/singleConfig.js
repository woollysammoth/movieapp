import {Platform} from 'react-native';

let config = {
  type: "single", //single, bottomTabs, topTabs
	animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  startCtor: "startSingleScreenApp",
	tabsStyle: {
    tabBarHidden: false, // make the tab bar hidden
    tabBarButtonColor: '#555', // change the color of the tab icons and text (also unselected)
    tabBarSelectedButtonColor: '#000', // change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: '#fff', // change the background color of the tab bar
    tabBarTranslucent: false, // change the translucent of the tab bar to false
    tabBarTextFontFamily: 'Helvetica-Bold',
    tabBarLabelColor: '#555', // iOS only. change the color of tab text
    tabBarSelectedLabelColor: '#000', // iOS only. change the color of the selected tab text
    forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
    tabBarHideShadow: true // iOS only. Remove default tab bar top shadow (hairline)
  },
  screen: {
    backButtonHidden: true,
    // Common
    navBarTextColor: '#000000', // change the text color of the title (remembered across pushes)
    navBarTextFontSize: 18, // change the font size of the title
    //navBarTextFontFamily: 'font-name', // Changes the title font
    navBarBackgroundColor: '#333', // change the background color of the nav bar (remembered across pushes)
    //navBarCustomView: 'example.CustomTopBar', // registered component name
    navBarComponentAlignment: 'center', // center/fill
    navBarCustomViewInitialProps: {}, // navBar custom component props
    navBarButtonColor: '#007aff', // Change color of nav bar buttons (eg. the back button) (remembered across pushes)
    topBarElevationShadowEnabled: false, // (Android - default: true, iOS - default: false). Disables TopBar elevation shadow on Lolipop and above
    navBarHidden: false, // make the nav bar hidden
    navBarHideOnScroll: false, // make the nav bar hidden only after the user starts to scroll
    navBarTranslucent: false, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
    navBarTransparent: false, // make the nav bar transparent, works best with drawUnderNavBar:true,
    navBarNoBorder: true, // hide the navigation bar bottom border (hair line). Default false
    drawUnderNavBar: false, // draw the screen content under the nav bar, works best with navBarTranslucent:true
    drawUnderTabBar: false, // draw the screen content under the tab bar (the tab bar is always translucent)
    navBarBlur: false, // blur the entire nav bar, works best with drawUnderNavBar:true
    tabBarHidden: false, // make the screen content hide the tab bar (remembered across pushes)
    statusBarHidden: false, // make the status bar hidden regardless of nav bar state
    statusBarTextColorScheme: "dark", // text color of status bar, 'dark' / 'light' (remembered across pushes)
    navBarSubtitleColor: '#666', // subtitle color
    //navBarSubtitleFontFamily: 'font-name', // subtitle font, 'sans-serif-thin' for example
    navBarSubtitleFontSize: 13, // subtitle font size
    screenBackgroundColor: 'white', // Default screen color, visible before the actual react view is rendered
    orientation: 'portrait', // Sets a specific orientation to a modal and all screens pushed to it. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
    disabledButtonColor: '#ff0000', // chnaged the navigation bar button text color when disabled.      
    // iOS only
    //statusBarTextColorSchemeSingleScreen: 'light', // same as statusBarTextColorScheme but does NOT remember across pushes
    statusBarHideWithNavBar: false, // hide the status bar if the nav bar is also hidden, useful for navBarHidden:true
    statusBarBlur: false, // blur the area under the status bar, works best with navBarHidden:true      
    disabledBackGesture: false, // default: false. Disable the back gesture (swipe gesture) in order to pop the top screen. 
    disabledSimultaneousGesture: true, // default: true. Disable simultaneous gesture recognition.
    //screenBackgroundImageName: '<name of image in Images.xcassets>', // Optional. default screen background image.
    //rootBackgroundImageName: '<name of image in Images.xcassets>', // Static while you transition between screens. Works best with screenBackgroundColor: 'transparent'
    navBarButtonFontSize: 20, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
    navBarButtonFontWeight: '500', // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)
    navBarLeftButtonFontSize: 17, // Change font size of left nav bar button
    navBarLeftButtonColor: 'red', // Change color of left nav bar button
    navBarLeftButtonFontWeight: '400', // Change font weight of left nav bar button
    navBarRightButtonFontSize: 17, // Change font size of right nav bar button
    navBarRightButtonColor: 'blue', // Change color of right nav bar button
    navBarRightButtonFontWeight: '600', // Change font weight of right nav bar button
    topBarShadowColor: 'blue', // Sets shadow of the navbar, Works only when topBarElevationShadowEnabled: true
    topBarShadowOpacity: 0.5, // Sets shadow opacity on the navbar, Works only when topBarElevationShadowEnabled: true
    topBarShadowOffset: 12, // Sets shadow offset on the navbar, Works only when topBarElevationShadowEnabled: true
    topBarShadowRadius: 3, // Sets shadow radius on the navbar, Works only when topBarElevationShadowEnabled: true
    preferredContentSize: { width: 500, height: 500 }, // Sets the preferred size for the view controller’s view.
    modalPresentationStyle: 'pageSheet', // Sets the presentation style for modally presented view controllers. Supported styles are: 'formSheet', 'pageSheet', 'overFullScreen', 'overCurrentContext' and 'fullScreen'.       
    largeTitle: false, // Sets the nav bar title to be in the larger iOS 11 style
    // Android only
    navigationBarColor: '#000000', // change the background color of the bottom native navigation bar.
    navBarTitleTextCentered: true, // default: false. centers the title.
    navBarSubTitleTextCentered: true, // (Android - default: false, iOS - default: depending on navBarTitleTextCentered). centers the subTitle.
    //navBarButtonFontFamily: 'sans-serif-thin', // Change the font family of textual buttons
    statusBarColor: '#000000', // change the color of the status bar.
    drawUnderStatusBar: false, // default: false, will draw the screen underneath the statusbar. Useful togheter with statusBarColor: transparent
    //collapsingToolBarImage: "http://lorempixel.com/400/200/", // Collapsing Toolbar image.
    //collapsingToolBarImage: require('../../img/topbar.jpg'), // Collapsing Toolbar image. Either use a url or require a local image.
    collapsingToolBarCollapsedColor: '#0f2362', // Collapsing Toolbar scrim color.
    navBarTextFontBold: false, // Optional. Set the title to bold.
    navBarHeight: 70, // Optional, set the navBar height in pixels.
    navBarTopPadding: 24, // Optional, set navBar top padding in dp. Useful when StatusBar.translucent=true on Android Lollipop and above.
    topTabsHeight: 70, // Optional, set topTabs height in pixels.
    topBarBorderColor: 'red', // Optional, set a flat border under the TopBar.
    topBarBorderWidth: 5.5, // Optional, set the width of the border.
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc',
    tabBarTranslucent: false,
    tabFontFamily: 'Avenir-Medium',  // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
    tabFontSize: 10,
    selectedTabFontSize: 12,
  },
  drawer: {
    left: {
        screen: 'app.Home',
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
      //fixedWidth: 500,
    },
    style: { // ( iOS only )
      drawerShadow: true, // optional, add this if you want a side menu drawer shadow
      contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
      //leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
      //rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
      shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
    },
    type: 'TheSideBar', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    animationType: 'airbnb', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
                                        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    //disableOpenGesture: true // optional, can the drawer be opened with a swipe instead of button
  },
  lightBox: {
    style: {
      backgroundBlur: "none", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
      backgroundColor: "#000" // tint color for the background, you can specify alpha here (optional)
    },
    adjustSoftInput: "resize" // android only, adjust soft input, modes: 'nothing', 'pan', 'resize', 'unspecified' (optional, default 'unspecified')
  }
};

export default config;