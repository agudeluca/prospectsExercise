import {StyleSheet} from 'react-native';

import { colors } from '@/styles';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    zindex: 10,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: colors.white,
  },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: '300',
    color: colors.gray190,
    includeFontPadding: true,
    letterSpacing: 2,
  },
});

export default styles;
