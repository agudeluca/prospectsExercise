import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Account = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.txt}> Account Screen </Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
