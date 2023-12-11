// create get endpoint with axios to get leads

import {useQuery} from '@tanstack/react-query';
import _ from 'lodash';

import type {Lead} from '../types';

import api from '@/services';

class NationalRegistry extends Error {
  constructor() {
    super('Error on get NationalRegistry');
  }
}

const fetchNationalRegistry = async (lead: Lead): Promise<boolean> => {
  try {
    const response = await api.get(`/nationalRegistry/${lead.nationalId}`);
    const leadFromNationalRegistry: Lead = response.data;
    // TODO this logic should go in to the backend
    return _.isEqual(leadFromNationalRegistry, {
      id: lead.nationalId,
      firstName: lead.firstName,
      lastName: lead.lastName,
      birthDate: lead.birthDate,
      email: lead.email
    });
  } catch (error) {
    throw NationalRegistry;
  }
};

const useGetNationalRegistry = (lead: Lead) => {
  const queryData = useQuery<boolean, Error>({
    queryKey: ['useGetNationalRegistry', lead.nationalId],
    queryFn: () => fetchNationalRegistry(lead),
  });

  return queryData;
};

export default useGetNationalRegistry;
