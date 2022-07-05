import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StatusBar, Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Images, BaseColor, useTheme } from '@config';
import {
  Image, Text, Icon,
  TextInput,
  Loader,
  Text as CustomText
} from '@components';
import { useTranslation } from 'react-i18next';

import styles from './styles';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Loading({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.content}>
      <Image source={Images.simple_bear} style={styles.logo} resizeMode="contain" />
      <Text title3 grayColor bold>{t('Currently_there_are_no_records')} </Text>
    </View>
  );
}
