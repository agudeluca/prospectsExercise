import { useNavigation, useRoute} from '@react-navigation/native';

import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type { RouteParamList } from '@/navigation/types';

type NavigationProps = NativeStackNavigationProp<RouteParamList>;
export const useAppNavigation = () => useNavigation<NavigationProps>();

export const useRouteDetails = <T extends keyof RouteParamList>() => {
  return useRoute<RouteProp<RouteParamList, T>>();
};
