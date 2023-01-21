import React from 'react';
import {View} from 'react-native';
import styles from './styles';

type DividerType = {
  opacity?: number;
};

const Divider: React.FC<DividerType> = ({opacity = 0.1}): JSX.Element => {
  return <View style={[styles.divider, {opacity}]} />;
};

export default Divider;
