import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import { colors } from '@/styles';

const Settings = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.txt}> Settings Screen </Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
