import React from 'react';
import {
  View,
} from 'react-native';
import Reanimated from 'react-native-reanimated';

function App(): React.JSX.Element {
  return(
    <Reanimated.View style={{backgroundColor: 'red', flex: 1}}>
      <View></View>
    </Reanimated.View>
  )
  
}

export default App;
