import {StyleSheet} from 'react-native';

import {colors, layouts} from '@/styles';

const styles = StyleSheet.create({
  submitText: {
    color: colors.white,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: colors.gray190,
  },
  submit: {
    ...layouts.centered,
    backgroundColor: colors.purple,
    position: 'absolute',
    bottom: 50,
    width: '95%',
    borderRadius: 10,
    height: 60,
    color: colors.white,
  },
  validations: {
    ...layouts.centered,
  },
  container: {
    ...layouts.container,
    alignItems: 'center',
    paddingTop: 90,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
});

export default styles;
