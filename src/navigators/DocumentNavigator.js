import { createStackNavigator } from 'react-navigation';
import Document from '../containers/Document';


const DocumentNavigator = createStackNavigator({
  Document: {
    screen: Document,
    navigationOptions: {
      header: null,
    },
  },
});

export default DocumentNavigator;
