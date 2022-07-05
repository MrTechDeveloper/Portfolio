import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  
} from 'react-native';
import { BaseStyle, BaseColor, Images, useTheme } from '@config';

const Loader = props => {
  const { colors } = useTheme();

  const {
    loading,
    ...attributes
  } = props;
  
  
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={[styles.activityIndicatorWrapper,{backgroundColor:colors.card}]}>
          <ActivityIndicator
            animating={loading}
            size="large" color={colors.primary}
             />
        </View>
      </View>
    </Modal>
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
  activityIndicatorWrapper:{
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;