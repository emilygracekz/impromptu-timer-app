import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quote from './components/quote';

export default function App() {
  return (
    <View style={styles.container}>
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
