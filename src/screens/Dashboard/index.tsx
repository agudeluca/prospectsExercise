import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

import LoadingOrErrorWrapper from '@/components/LoadingOrErrorWrapper';
import {useAppNavigation} from '@/navigation/hooks';
import {Routes} from '@/navigation/types';
import useGetLeads from '@/services/hooks/useGetLeads';
import type {Lead} from '@/services/types';
import type {FilterTypes} from '@/types';

import styles from './styles';

const Dashboard = () => {
  const {data, isLoading, refetch, isRefetching} = useGetLeads();
  const [filterType, setFilterType] = React.useState<FilterTypes>('all');
  const navigation = useAppNavigation();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const handleOnPress = useCallback(
    lead => () => {
      navigation.navigate(Routes.validationScreen, {lead});
    },
    [data],
  );

  const renderItem = useCallback(
    ({item}: {item: Lead}): JSX.Element => {
      return (
        <TouchableOpacity
          disabled={item.isProspect}
          style={styles.item}
          onPress={handleOnPress(item)}
        >
          <View>
            <Text style={[styles.label, styles.bold]}>{item.isProspect ? 'Prospect' : 'Lead'}</Text>
            <Text style={styles.label}>{`${item.firstName} ${item.lastName}`}</Text>
            <Text style={styles.label}>{item.email}</Text>
          </View>
          <View style={[styles.validateButton, item.isProspect && styles.disabled]}>
            <Text style={styles.validateText}>Validate</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [data, isRefetching],
  );

  const filteredData = React.useMemo(() => {
    if (filterType === 'all') {
      return data;
    }
    return data.filter(lead => lead.isProspect === (filterType === 'prospects'));
  }, [data, filterType, isRefetching]);

  return (
    <LoadingOrErrorWrapper loading={isLoading} theme="light">
      <SafeAreaView style={styles.container}>
        <View style={styles.filters}>
          <Button onPress={() => setFilterType('all')} style={styles.filterButton}>
            <Text>Alls</Text>
          </Button>
          <Button onPress={() => setFilterType('prospects')} style={styles.filterButton}>
            <Text>Prospects</Text>
          </Button>
          <Button onPress={() => setFilterType('leads')} style={styles.filterButton}>
            <Text>Leads</Text>
          </Button>
        </View>
        <FlatList style={styles.list} data={filteredData} renderItem={renderItem} />
      </SafeAreaView>
    </LoadingOrErrorWrapper>
  );
};

export default Dashboard;
