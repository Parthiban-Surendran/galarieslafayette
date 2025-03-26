import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomDivider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default CustomDivider;
