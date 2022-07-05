import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { Text } from '@components';
import { BaseStyle, BaseColor, Images, useTheme } from '@config';
import { useTranslation } from 'react-i18next';
const Loader = props => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const {
    loading,
    length,
    ...attributes
  } = props;


  return (
    <>
      {loading && <View style={[styles.activityIndicatorWrapper]}>
        <ActivityIndicator
          animating={loading}
          size="large" color={colors.primary}
        />
      </View>}
      {(length > 0 && !loading) && <View style={{ }}>
        <Text bold caption1 style={{textAlign:'center',color: BaseColor.yellowColor}}>{t('you_all_caught_up')}</Text>
      </View>}
    </>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    // height: 100,
    // width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;