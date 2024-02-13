/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import CountDown from './src/Screen/view/CountDown';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <CountDown />
    </Provider>

  );
};

export default App;
