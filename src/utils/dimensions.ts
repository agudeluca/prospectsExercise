import { Platform } from 'react-native';

const dimensionsByPlatform = (ios: number, android: number) => {
  return Platform.OS === 'ios' ? ios : android;
};

export default dimensionsByPlatform;
