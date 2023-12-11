// https://65597dc9e93ca47020aa3ec8.mockapi.io/leads

import {MOCK_API} from '@env';
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

let queryClient: QueryClient;

export const queryClientInstance = (): QueryClient => {
  if (!queryClient) {
    queryClient = new QueryClient();
  }

  return queryClient;
}

const api = axios.create({
  baseURL: MOCK_API,
});

export default api;
