// create get endpoint with axios to get leads

import {useQuery} from '@tanstack/react-query';

import type { Lead } from '../types';

import api from '@/services';

class LeadError extends Error {
  constructor() {
    super('Error on get leads');
  }
}

const fetchLeads = async (): Promise<Lead[]> => {
  try {
    const response = await api.get('/leads');
    return response.data;
  } catch (error) {
    throw LeadError
  }
}

const useGetLeads = () => {
  const queryData = useQuery<Lead[], Error>({
    queryKey: ['useGetLeads'],
    queryFn: () => fetchLeads(),
  });

  return queryData;
};

export default useGetLeads;
