import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quote from './components/quote';
import Timer from './components/timer'

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
      <Quote />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778bd9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
