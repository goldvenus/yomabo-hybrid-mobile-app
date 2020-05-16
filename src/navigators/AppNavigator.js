/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import { Image } from 'react-native';
import HomeNavigator from './HomeNavigator';
import Page2Navigator from './Page2Navigator';
import Page3Navigator from './Page3Navigator';
import Page4Navigator from './Page4Navigator';
import React from 'react';


const SwitchNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOption: {
        tabBarIcon: ({tintColor}) => (tintColor === "#ff0000" ?
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
          :
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
        ),
      }
    },
    Page2: {
      screen: Page2Navigator,
      navigationOption: {
        tabBarIcon: ({tintColor}) => (tintColor === "#ff0000" ?
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
          :
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
        ),
      }
    },
    Page3: {
      screen: Page3Navigator,
      navigationOption: {
        tabBarIcon: ({tintColor}) => (tintColor === "#ff0000" ?
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
          :
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
        ),
      }
    },
    Page4: {
      screen: Page4Navigator,
      navigationOption: {
        tabBarIcon: ({tintColor}) => (tintColor === "#ff0000" ?
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
          :
          <Image source={require('../../assets/images/bottom_nav_bar/wavescore.png')} resizeMode="contain"
                 style={{width: 20, height: 20, tintColor: tintColor}}/>
        ),
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#ff0000",
    barStyle: {
        backgroundColor: "#ff0000",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        overflow: 'hidden'
    },
  },
);

const RootNavigator = createAppContainer(SwitchNavigator);

const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.navigation,
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);


export { RootNavigator, AppNavigator, middleware };
