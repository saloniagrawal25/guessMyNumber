import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/color';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyItems: 'center',
  },
  numberText: {
    fontFamily: 'OpenSans-Bold',
    color: Colors.accent500,
    fontSize: 36,
  },
});

export default NumberContainer;
