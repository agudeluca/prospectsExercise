// create get endpoint with axios to get leads

import {useQuery} from '@tanstack/react-query';

import type {QualificationType} from '../types';

import api from '@/services';

class Qualification extends Error {
  constructor() {
    super('Error on get Qualification');
  }
}

const fetchQualification = async (nationalId: string): Promise<QualificationType> => {
  try {
    const response = await api.get(`/qualification/${nationalId}`);
    return response.data;
  } catch (error) {
    throw Qualification;
  }
};

const useGetQualification = (nationalId: string, enabled: boolean) => {
  const queryData = useQuery<QualificationType, Error>({
    queryKey: ['useGetQualification', nationalId],
    queryFn: () => fetchQualification(nationalId),
    enabled,
  });

  return queryData;
};

export default useGetQualification;
