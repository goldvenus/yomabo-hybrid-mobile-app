import { createStackNavigator } from 'react-navigation';
import Document from '../containers/Document';
import DocDetail from '../containers/Document/DocDetail';

const DocumentNavigator = createStackNavigator({
  Document: {
    screen: Document,
    navigationOptions: {
      header: null,
    },
  },
  DocDetail: {
    screen: DocDetail,
    navigationOptions: {
      header: null,
    },
  }
});

export default DocumentNavigator;
