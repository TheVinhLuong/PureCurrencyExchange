import { AppRegistry } from 'react-native';
import App from './App';
import { logger } from 'react-native-logger'


AppRegistry.registerComponent('PureCurrencyExchange', () => App);
logger.setFilters('wtf');