import { Platform, StyleSheet } from 'react-native';
import { fontSize, spacingUnit, halfSpacingUnit } from './Layout';

const clearButton = {
  backgroundColor: '#00000000',
  elevation: 0,
};

export default StyleSheet.create({
  flex: {
    flex: 1
  },
  text: {
    fontFamily: 'Barlow-Regular',
  },
  lightText: {
    color: '#FFFFFF'
  },
  lightTextSecondary: {
    color: '#989E9E'
  },
  darkText: {
    color: '#353337'
  },
  darkTextSecondary: {
    color: '#8B909A'
  },
  toast: {
    width: '80%',
  },
  toastText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  emptyIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  emptyTitle: {
    color: '#989E9E',
    marginBottom: 20,
  },
  emptyBody: {
    color: '#989E9E',
  },
  clearButton,
  secondaryButton: clearButton,
  clearButtonDarkText: {
    color: '#353337'
  },
  semiTransparentHeader: {
    backgroundColor: '#000000AA',
    elevation: 0,
    borderBottomWidth: 0,
  },
  safeAreaContainer: {
    width: '100%',
    height: '100%',
  },
  bgImageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },

  tab: {
    elevation: 0,
  },

  tabIndicator: {
    backgroundColor: '#00CCD6',
  },

  tabLabel: {
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
  },


  // Login
  loginContainer: {
    width: '100%',
    backgroundColor: '#000000AA',
    alignItems: 'center',
    padding: 16,
    marginBottom: 4,
    borderRadius: 4,
  },
  loginHighlightText: {
    color: '#00CCD6'
  },
  loginTextInput: {
    width: '100%',
    padding: 20,
    backgroundColor: '#000000AA',
    marginBottom: 4
  },
  loginButton: {
    marginBottom: 4,
  },
  authButton: {
    height: 60,
    width: '100%',
    marginBottom: 4,
  },
  authButtonDisabled: {
    opacity: 0.5,
  },
  googleSignInButton: {
    backgroundColor: '#FFFFFF',
  },
  googleSignInButtonText: {
    color: '#4a4a4a',
  },
  settingsButton: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    borderBottomWidth: 1,
    borderColor: '#E4EAEC',
    height: 56,
  },

  settingsButtonText: {
    color: '#4a4a4a'
  },

  // Generic
  userListItem: {
    backgroundColor: '#FFFFFF',
  },
  button: {
    borderRadius: 4,
    elevation: 0,
    height: 56,
  },
  buttonContainerView: {
    marginLeft: 0,
    marginRight: 0,
  },
  buttonTitle: {
    fontFamily: 'Barlow-Regular',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Drive
  indicatorContainer: {
    paddingVertical: halfSpacingUnit,
    paddingHorizontal: spacingUnit,
    backgroundColor: '#2B1241',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#7ED321',
    width: '75%',
  },
  indicatorText: {
    color: '#7ED321',
    fontSize: Platform.OS === 'ios' ? 24 : fontSize.medium,
  },

  // Profile
  userNameText: {
    color: '#D7EBEA',
    fontSize: 18
  },
  fullNameText: {
    color: '#989E9E',
    fontSize: 14
  },
  profileTabBar: {
    backgroundColor: '#00000099',
  },
  profileTab: {
    paddingLeft: 16,
    paddingVertical: 8,
  },
  profileTabText: {
    fontSize: 10,
  },
  profileTabCount: {
    fontSize: 18
  },
  lapVideoPlayer: {
    backgroundColor: '#000000',
    flex: 1
  }
});

export const buttonStyles = {
  lightOutline: {
    title: {
    },
    button: {
      borderWidth: 1,
    },
    container: {
    }
  },
  activeLightOutline: {
    title: {
    },
    button: {
    },
    container: {
    }
  },
};

export const elementStyles = {
  cardTabs: {
    container: {
      borderRadius: 0,
      borderWidth: 0,
      marginLeft: 4,
      marginRight: 4,
      marginTop: 4,
      marginBottom: 4,
      height: 28,
    },
    text: {
      fontFamily: 'Barlow-Regular',
      fontSize: 12,
      fontWeight: 'normal',
    },
    innerBorder: {
      width: 0,
    },
    button: {
    },
    selectedText: {
      fontWeight: 'bold',
    },
    selectedButton: {
      borderRadius: 4,
    }
  },
  listItem: {
    titleText: {
      fontFamily: 'Barlow-Regular',
      fontSize: 14,
    }
  },
};
