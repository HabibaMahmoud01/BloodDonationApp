import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image } from 'react-native';
import { useState } from 'react';

import React from 'react';
import { View } from 'react-native';
import RequestForm from './Screens/RequestForm';
// import background from './assets/background.png';
// import AndroidLarge from './assets/AndroidLarge.png'

const App = () => {
  return (

    <View>
      {/* <Image source={AndroidLarge} /> */}

      {/* <text>hello</text> */}
      <RequestForm />
    </View>
  );
}
export default App;