// import 'react-native-gesture-handler';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {createContext, useReducer} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import Navigate from './Navigation.js';
import { store } from './store/store.js';
import NavigateStack from './Navigation.js';


export default function App({children}) {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigateStack/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0080ff',
    paddingTop:0,
    paddingBottom:0
  },
});
