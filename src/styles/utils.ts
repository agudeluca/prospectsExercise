/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import {merge} from 'lodash';
import {Platform, StyleSheet} from 'react-native';

const dimensionsByPlatform = (ios: number, android: number) => {
  return Platform.OS === 'ios' ? ios : android;
};

const styleSheetMerge = (baseStyle: any, ...diffStyles: any): any =>
  StyleSheet.create(merge({}, baseStyle, ...diffStyles));

export {dimensionsByPlatform, styleSheetMerge};
