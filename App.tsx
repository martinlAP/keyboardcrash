import React from 'react';
import {
  View,
} from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

function App(): React.JSX.Element {

  return(
    <KeyboardProvider>
      <View></View>
    </KeyboardProvider>
  )
  
}

export default App;
