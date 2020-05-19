import { createStackNavigator } from 'react-navigation';
import ScanPassport from '../containers/ScanPassport';

const ScanPassportNavigator = createStackNavigator({
  ScanPassCam: {
    screen: ScanPassport,
    navigationOptions: {
      header: null,
    },
  },
});

export default ScanPassportNavigator;
