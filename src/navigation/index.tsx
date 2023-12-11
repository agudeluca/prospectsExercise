import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import { View} from 'react-native';

import type {SetStateAction} from 'react';

import DrawerContent from '@/navigation/DrawerContent';
import ScreenContent from '@/navigation/ScreenContent';
import {DrawerContext} from '@/providers/drawer';

import styles from './styles';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<SetStateAction<string>>();
  const {setCurrentRoute} = React.useContext(DrawerContext);

  const handleOnReady = useCallback(() => {
    routeNameRef.current = navigationRef.getCurrentRoute().name;
    setCurrentRoute(routeNameRef.current);
  }, [navigationRef]);

  const handleOnStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute().name;
    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;
      setCurrentRoute(routeNameRef.current);
    }
  }, [navigationRef, setCurrentRoute]);

  return (
    <View style={styles.container}>
      <NavigationContainer
        ref={navigationRef}
        onReady={handleOnReady}
        onStateChange={handleOnStateChange}
      >
        <View style={styles.container}>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerType: 'back',
              sceneContainerStyle: styles.scene,
              drawerStyle: styles.drawerStyles,
              overlayColor: 'transparent',
            }}
            drawerContent={props => DrawerContent(props)}
          >
            <Drawer.Screen
              name="Screens"
              options={{
                headerShown: false,
              }}
            >
              {props => <ScreenContent {...props} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        </View>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
