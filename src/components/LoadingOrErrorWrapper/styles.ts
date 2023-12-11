import {StyleSheet} from 'react-native';

import {colors, layouts} from '@/styles';
import {styleSheetMerge, dimensionsByPlatform} from '@/styles/utils';

export enum Themes {
  light = 'light',
}

const commonStyles = StyleSheet.create({
  mainContainer: {
    ...layouts.container,
    height: '100%',
  },
  back: {
    position: 'relative',
    paddingHorizontal: 20,
    marginTop: dimensionsByPlatform(0, 20),
  },
  container: {
    ...layouts.centered,
    paddingTop: '50%',
  },
});

const whiteStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
  },
});

const styles = {
  [Themes.light]: styleSheetMerge(commonStyles, whiteStyles),
};

export default styles;
