// create get endpoint with axios to get leads

import {useMutation} from '@tanstack/react-query';

import api, {queryClientInstance} from '@/services';

class LeadMutationError extends Error {
  constructor() {
    super('Error on get leads');
  }
}

const updateLeads = async (nationalId: string, body: unknown): Promise<void> => {
  try {
    const response = await api.put(`/leads/${nationalId}`, body);
    return response.data;
  } catch (error) {
    throw LeadMutationError;
  }
};

const useUpdateLeads = () => {
  const queryClient = queryClientInstance();
  const mutationData = useMutation<void, Error, unknown>({
    mutationKey: ['useUpdateLeads'],
    mutationFn: ({nationalId, body}: {nationalId: string; body}) => updateLeads(nationalId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['useGetLeads']});
    },
  });

  return mutationData;
};

export default useUpdateLeads;
