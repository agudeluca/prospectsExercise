import React from 'react';
import {ActivityIndicator, View, Text, SafeAreaView} from 'react-native';

import type {StyleProp, ViewStyle} from 'react-native';

import {colors} from '@/styles';

import styles from './styles';

interface LoadingOrErrorWrapperProps {
  loading: boolean;
  error?: boolean;
  children: React.ReactElement;
  customStyles?: StyleProp<ViewStyle>;
  theme?: 'light' | 'dark' | 'dark21';
}

const LoadingOrErrorWrapper = ({
  loading,
  error,
  children,
  customStyles = {backgroundColor: colors.white},
  theme = 'light',
}: LoadingOrErrorWrapperProps): JSX.Element => {
  const themedStyles = styles[theme];
  if (loading) {
    return (
      <SafeAreaView style={themedStyles.mainContainer}>
        <View style={themedStyles.container}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={themedStyles.mainContainer}>
        <View style={themedStyles.container}>
          <Text style={themedStyles.text}>There was a error loading the screen</Text>
        </View>
      </SafeAreaView>
    );
  }
  return <View style={[themedStyles.mainContainer, customStyles]}>{children}</View>;
};

export default LoadingOrErrorWrapper;
