import {StyleSheet} from 'react-native';

import { colors, layouts } from '@/styles';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },
  item: {
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.gray245,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: colors.gray245,
    marginHorizontal: 5,
  },
  label: {
    margin: 2,
  },
  validateText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  validateButton: {
    backgroundColor: colors.purple,
    color: colors.white,
    borderRadius: 5,
    height: 28,
    textAlign: 'center',
    alignContent: 'center',
    padding: 5,
    width: 80,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: colors.gray190,
  },
  filters: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 70,
  },
  container: {
    ...layouts.container,
    ...layouts.centered,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});

export default styles;
