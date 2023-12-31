import {StyleSheet} from 'react-native';

import { colors } from '@/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    position: 'absolute',
    width: '100%',
    height: '100%',

    backgroundColor: colors.darkPurple,
  },
  stack: {
    flex: 1,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {
    position: 'absolute',
    height: '100%',
    borderTopLeftRadius: 30,
    left: 0,
    width: '45%',
    backgroundColor: colors.darkPurple,
  },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
