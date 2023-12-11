/* eslint-disable no-nested-ternary */
import React, {useCallback, useEffect, useMemo} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';

import ValidationItem from '@/components/ValidationItem';
import {useAppNavigation, useRouteDetails} from '@/navigation/hooks';
import {Routes} from '@/navigation/types';
import useGetCriminalRecords from '@/services/hooks/useGetCriminalRecords';
import useGetNationalRegistry from '@/services/hooks/useGetNationalRegistry';
import useGetQualification from '@/services/hooks/useGetQualification';
import useUpdateLeads from '@/services/hooks/useUpdateLeads';

import styles from './styles';

const ValidationScreen = () => {
  const navigation = useAppNavigation();
  const {lead} = useRouteDetails().params;
  const [enableQualificationQuery, setEnableQualificationQuery] = React.useState(false);

  const {data: nationalRegistry, isLoading: isLoadingNationalRegistry} =
    useGetNationalRegistry(lead);

  const {data: criminalRecord, isLoading: isLoadingCriminalRecords} = useGetCriminalRecords(
    lead.nationalId,
  );

  const {data: qualificationData, isLoading: isLoadingQualification} = useGetQualification(
    lead.nationalId,
    enableQualificationQuery,
  );

  const {mutate, isPending, isSuccess} = useUpdateLeads();

  useEffect(() => {
    if (!isLoadingCriminalRecords && !isLoadingNationalRegistry) {
      setEnableQualificationQuery(true);
    }
  }, [isLoadingCriminalRecords, isLoadingNationalRegistry]);

  useEffect(() => {
    if (!isSuccess) return;
    navigation.navigate(Routes.dashboard);
  }, [isSuccess]);

  const handleMakeProspect = useCallback(() => {
    mutate({
      nationalId: lead.nationalId,
      body: {
        isProspect: true,
      },
    });
  }, [lead, mutate]);

  const isValid = useMemo(
    () => nationalRegistry && !criminalRecord && qualificationData?.value > 60,
    [nationalRegistry, criminalRecord, qualificationData],
  );

  return (
    <View style={styles.container}>
      <View style={styles.validations}>
        <ValidationItem
          title="Validate Lead"
          isLoading={isLoadingNationalRegistry}
          conditionToBeValid={nationalRegistry}
          description="The person should exist in the national registry identification external system and
            their information should match the information stored in our database."
        />
        <ValidationItem
          title="Criminal Records"
          isLoading={isLoadingCriminalRecords}
          conditionToBeValid={!criminalRecord}
          description="The person does not have any judicial records in the national archives external system."
        />
        <ValidationItem
          title="Qualifications"
          isLoading={
            isLoadingNationalRegistry || isLoadingCriminalRecords || isLoadingQualification
          }
          conditionToBeValid={qualificationData?.value > 60}
          description="Our internal prospect qualification system gives a satisfactory score for that person.
            This system outputs a random score between 0 and 100. A lead could be turned into prospect
            if the score is greater than 60."
        />
      </View>
      <TouchableOpacity
        style={[
          styles.submit,
          (!isValid ||
            isLoadingCriminalRecords ||
            isLoadingNationalRegistry ||
            isLoadingQualification) &&
            styles.disabled,
        ]}
        disabled={
          !isValid ||
          isLoadingCriminalRecords ||
          isLoadingNationalRegistry ||
          isLoadingQualification
        }
        onPress={handleMakeProspect}
      >
        {isPending ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={styles.submitText}>MAKE PROSPECT</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ValidationScreen;
