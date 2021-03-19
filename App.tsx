/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Pressable
} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
      <SafeAreaView>
      <Text testID="AppText">This is an app</Text>
      <Pressable testID="Button" onPress={() => setVisible(!visible)}>
      <Text>Press me</Text>
      </Pressable>
      {visible ? <Text testID="VisibleText">Visible</Text> : null}
      </SafeAreaView>
  );
};

export default App;
