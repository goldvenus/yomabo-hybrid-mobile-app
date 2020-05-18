import { StyleSheet } from 'react-native';
import { fontSize } from './Layout';
import GlobalColor from './Colors';

// const clearButton = {
//   backgroundColor: '#00000000',
//   elevation: 0,
// };

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: GlobalColor.forgroundColor
  },
  title: {
    fontSize: fontSize.large
  },
  description: {
    color: GlobalColor.titleDescription,
    opacity: 0.3
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
