import {useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator, HeaderStyleInterpolators} from '@react-navigation/stack';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {TouchableOpacity, Image, Animated} from 'react-native';

import type {DrawerNavigationProp} from '@react-navigation/drawer';

import CloseSvg from '@/assets/close.svg';
import menuIcon from '@/assets/menu.png';
import {Routes, type RouteParamList} from '@/navigation/types';
import {DrawerContext} from '@/providers/drawer';
import Account from '@/screens/Account';
import Dashboard from '@/screens/Dashboard';
import Settings from '@/screens/Settings';
import ValidationScreen from '@/screens/ValidationScreen';
import {animation} from '@/utils/animations';

import styles from './styles';

const Stack = createStackNavigator();

type ScreenOptionsProps = {
  navigation: DrawerNavigationProp<RouteParamList>;
};

const ScreenContent = ({navigation}: ScreenOptionsProps) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const animatedStyles = useMemo(() => {
    return {
      ...styles.screen,
      transform: [
        {
          rotate: rotateValue.interpolate({
            inputRange: [0, 50],
            outputRange: ['0deg', '-10deg'],
          }),
        },
        {
          translateX: rotateValue.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 70],
          }),
        },
        {
          translateY: rotateValue.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 40],
          }),
        },
      ],
    };
  }, [rotateValue]);

  const isDrawerStatus = useDrawerStatus();
  const {isOpened, setIsOpened} = React.useContext(DrawerContext);
  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
    setIsOpened(true);
  }, [setIsOpened]);

  useEffect(() => {
    if (isDrawerStatus === 'closed') {
      setIsOpened(false);
    }
  }, [isDrawerStatus]);

  useEffect(() => {
    if (isOpened) {
      animation(rotateValue, 50);
    } else {
      animation(rotateValue, 0);
    }
  }, [isOpened]);

  const renderMenuIcon = useCallback(() => {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Image source={menuIcon} style={styles.menu} />
      </TouchableOpacity>
    );
  }, []);

  const renderGoBack = useCallback(() => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CloseSvg width={40} height={40} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <Animated.View style={animatedStyles}>
      <Stack.Navigator
        initialRouteName={Routes.dashboard}
        screenOptions={{
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          headerTransparent: true,
          animationEnabled: false,
          headerTitle: 'WELCOME',
          headerTitleStyle: styles.header,
          headerTitleAlign: 'left',
          headerLeft: renderMenuIcon,
        }}
      >
        <Stack.Screen name={Routes.dashboard} component={Dashboard} />
        <Stack.Screen name={Routes.account} component={Account} />
        <Stack.Screen name={Routes.settings} component={Settings} />
        <Stack.Screen
          options={{
            headerShown: true,
            presentation: 'modal',
            headerTitle: '',
            headerLeft: null,
            headerRight: renderGoBack,
          }}
          name={Routes.validationScreen}
          component={ValidationScreen}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default ScreenContent;
