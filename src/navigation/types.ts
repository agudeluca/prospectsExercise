import type { Lead } from '@/services/types';

export type RouteParamList = {
  [Routes.dashboard]: undefined;
  [Routes.account]: undefined;
  [Routes.settings]: undefined;
  [Routes.validationScreen]: {lead: Lead};
};

export enum Routes {
  dashboard = 'dashboard',
  account = 'account',
  settings = 'settings',
  validationScreen = 'validationScreen',
}
