import {ActivityIndicator, Text, View} from 'react-native';

import CheckMarkIcon from '@/assets/checkmark.svg';
import CloseSolidIcon from '@/assets/closeSolidGold.svg';

import styles from './styles';

type ValidationItemProps = {
  description: string;
  title: string;
  isLoading: boolean;
  conditionToBeValid: boolean | undefined;
};

const conditionCompliance = condition => {
  return condition ? <CheckMarkIcon /> : <CloseSolidIcon width={40} height={40} />;
};

const ValidationItem = ({
  description,
  title,
  isLoading,
  conditionToBeValid,
}: ValidationItemProps) => {
  return (
    <View style={styles.validationItem}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      <View>
        {isLoading ? <ActivityIndicator size="small" /> : conditionCompliance(conditionToBeValid)}
      </View>
    </View>
  );
};

export default ValidationItem;
