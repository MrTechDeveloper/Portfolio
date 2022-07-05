import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Button, Icon } from '@components';
import styles from './styles';
import Modal from 'react-native-modal';
import { useTheme } from '@config';
import { useTranslation } from 'react-i18next';

export default function FormOption(props) {
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const { children, style, actionText, onCancel, action, action2, confirmationMessage } = props;

  useEffect(() => {

  }, []);
  // console.log(props.option)
  const openModal = () => {
    setModalVisible(true);
  };

  const onLaunchCamera = () => {
    setModalVisible(false);
    action();
  };

  const onSelectImage = () => {
    setModalVisible(false);
    action2();
  };

  return (
    <View>
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => {
          setModalVisible(false);
          onCancel();
        }}
        swipeDirection={['down']}
        style={styles.bottomModal}>
        <View
          style={[styles.contentFilterBottom, { backgroundColor: colors.card }]}>
          <View style={styles.contentSwipeDown}>
            <View style={styles.lineSwipeDown} />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Icon name="times" color={colors.primary} size={20} />
          </TouchableOpacity>
          <View style={{marginVertical:20}}>
            {/* <Text headline>{confirmationMessage}</Text> */}
            <TouchableOpacity onPress={() => onLaunchCamera()} style={{height:50,justifyContent:'center',}}>
              <Text body1>Launch Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSelectImage()} style={{height:50,justifyContent:'center',}}>
              <Text body1>Select Image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.contentForm, { backgroundColor: colors.card }, style]}
        onPress={() => openModal()}>
        {children}
      </TouchableOpacity>
    </View>
  );
}

FormOption.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  actionText: PropTypes.string,
  value: PropTypes.string,
  option: PropTypes.array,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  action: PropTypes.func,
  confirmationMessage: PropTypes.string
};

FormOption.defaultProps = {
  style: {},
  actionText: 'Ok',
  value: 'Economy',
  option: [
    {
      value: 'Economy',
      text: 'Economy Class',
    },
    {
      value: 'Business',
      text: 'Business Class',
    },
    {
      value: 'First',
      text: 'First Class',
    },
    {
      value: 'Normal',
      text: 'Normal Class',
    },
  ],
  onCancel: () => { },
  onChange: () => { },
  action: () => { },
  confirmationMessage: '',
};
