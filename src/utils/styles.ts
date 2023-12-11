/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import {merge} from 'lodash';
import { StyleSheet} from 'react-native';

const styleSheetMerge = (baseStyle: unknown, ...diffStyles: any): any =>
  StyleSheet.create(merge({}, baseStyle, ...diffStyles));

  export default styleSheetMerge;
