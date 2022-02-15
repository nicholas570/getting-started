import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#000'
  }
});

export const Separator = () => {
  return <View style={styles.separator} />;
};
