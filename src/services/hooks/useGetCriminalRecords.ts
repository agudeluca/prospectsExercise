// create get endpoint with axios to get leads

import {useQuery} from '@tanstack/react-query';

import type { Lead } from '../types';

import api from '@/services';

class CriminalRecords extends Error {
  constructor() {
    super('Error on get CriminalRecords');
  }
}

const fetchCriminalRecords = async (nationalId: string): Promise<Lead[]> => {
  try {
    const response = await api.get(`/criminalRecords/${nationalId}`);
    return response.data;
  } catch (error) {
    throw CriminalRecords
  }
}

const useGetCriminalRecords = (nationalId: string) => {
  const queryData = useQuery<Lead[], Error>({
    queryKey: ['useGetCriminalRecords', nationalId],
    queryFn: () => fetchCriminalRecords(nationalId),
  });

  return queryData;
};

export default useGetCriminalRecords;
