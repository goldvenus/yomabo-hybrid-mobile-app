/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Image } from 'react-native';

import HomeNavigator from './HomeNavigator';
import Page2Navigator from './Page2Navigator';
import Page3Navigator from './Page3Navigator';
import Page4Navigator from './Page4Navigator';
import AppMocData from '@share/MocData';
import GlobalColor from '@constants/Colors';
import { fontSize, tabBarHeight, normalizeSize } from '@constants/Layout';

const SwitchNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
    Documents: { screen: Page2Navigator },
    Cam: { screen: Page3Navigator,
      navigationOptions: {
        tabBarLabel: () => null
      } },
    Sources: { screen: Page3Navigator },
    Settings: { screen: Page4Navigator },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line consistent-return
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={
                focused
                  ? AppMocData.bottomBar.navDashBoardActive
                  : AppMocData.bottomBar.navDashBoard
              }
              style={{
                width: 40,
                height: 40
              }}
            />
          );
        } if (routeName === 'Documents') {
          return (
            <Image
              source={
                focused
                  ? AppMocData.bottomBar.navDocumentsActive
                  : AppMocData.bottomBar.navDocuments
              }
              style={{
                width: 40,
                height: 40
              }}
            />
          );
        } if (routeName === 'Cam') {
          return (
            <Image
              source={
                focused
                  ? AppMocData.bottomBar.navCamActive
                  : AppMocData.bottomBar.navCam
              }
              style={{
                width: 65,
                height: 65,
                marginBottom: 25
              }}
            />
          );
        } if (routeName === 'Sources') {
          return (
            <Image
              source={
                focused
                  ? AppMocData.bottomBar.navSourcesActive
                  : AppMocData.bottomBar.navSources
              }
              style={{
                width: 40,
                height: 40
              }}
            />
          );
        } if (routeName === 'Settings') {
          return (
            <Image
              source={
                focused
                  ? AppMocData.bottomBar.navSettingActive
                  : AppMocData.bottomBar.navSetting
              }
              style={{
                width: 40,
                height: 40
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: GlobalColor.primaryColor,
      inactiveTintColor: GlobalColor.inactiveTextColor,
      tabBarPosition: 'bottom',
      labelStyle: {
        fontSize: fontSize.xsmall,
        paddingBottom: normalizeSize(12)
      },
      style: {
        height: tabBarHeight,
        paddingTop: normalizeSize(25)
      }
    },
  },
  {
    initialRouteName: 'Home',
    // barStyle: {
    //   backgroundColor: 'white',
    //   borderTopLeftRadius: 20,
    //   borderTopRightRadius: 20,
    //   borderColor: 'transparent',
    //   overflow: 'hidden',
    //   shadowRadius: 3,
    //   shadowOffset: {
    //     width: 2,
    //     height: -3,
    //   },
    //   shadowOpacity: 1.0,
    //   shadowColor: '#ff0000',
    //   elevation: 0
    // },
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
