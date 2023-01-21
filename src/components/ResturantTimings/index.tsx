import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import icons from '../../constants/icons';

import timings from '../../constants/timings.json';
import {normalizeData} from '../../utils';
import DayItemView from '../DayItemView';
import Divider from '../Divider';

import styles from './styles';

export type TimingType = {
  type: string;
  value: any;
};

export type StatusType = {
  [key: string]: TimingType[] | any;
};

const ResturantTimings: React.FC = (): JSX.Element => {
  const [resturantTimings, setResturantTimings] = useState<StatusType>({});

  useEffect(() => {
    const normalize = normalizeData(timings);
    setResturantTimings(normalize);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Divider opacity={0.5} />
      <FlatList
        style={styles.list}
        data={Object.entries(resturantTimings)}
        scrollEnabled={false}
        ItemSeparatorComponent={Divider}
        renderItem={DayItemView}
      />
    </View>
  );
};

const Header: React.FC = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <Image source={icons.CLOCK} style={styles.clock} />
      <Text style={styles.headerText}>Opening Hours</Text>
    </View>
  );
};

export default ResturantTimings;
