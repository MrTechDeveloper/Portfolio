import React, { useState, useRef,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  View,
  I18nManager,
  Dimensions
} from "react-native";
import { Text, Button, TextInput, Icon } from '@components';
import IntlPhoneInput from '../PhoneInputTextPackge';
import PropTypes from 'prop-types';
import { BaseStyle, BaseColor, useTheme } from '@config';
import { useTranslation } from 'react-i18next';

export default function Index(props) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const cardColor = colors.card;
  const {
    style,
    onChangeText,
    onFocus,
    placeholder,
    value,
    success,
    secureTextEntry,
    keyboardType,
    multiline,
    textAlignVertical,
    icon,
    onSubmitEditing,
  } = props;

  let phoneInput = React.useRef(null);
  const onChangePhonText = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified }) => {
    onChangeText({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified });
  };

  const [modal, setModal] = useState(false);
  const [data, setData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  let arrayholder = [];
  const inPutStyle = {
    fontFamily: 'Raleway',
    flex: 1,
    height: '100%',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: colors.text,
    paddingTop: 5,
    paddingBottom: 5,
  }

  

  const SelectCountry = (modalVisible, countries, onCountryChange) => {
    useEffect(() => {

    },[])
    setData(countries);
    arrayholder = countries;
    const searchFilterFunction = (text) => {
      setSearchText(text);
  console.log(text)
  console.log(text)
      const newData = arrayholder.filter(item => {
        const itemData = `${item.en.toUpperCase()}`;
        const textData = text.toUpperCase();
  
        return itemData.indexOf(textData) > -1;
      });
      setData(newData)
    };
    return (
      <Modal visible={modalVisible}>
        <View style={[{ backgroundColor: cardColor, height: Dimensions.get('window').height - 80 }]}>
          <TextInput
            placeholder={t('search_country')}
            icon={<Icon name='search' size={20} color={colors.border} solid />}
            style={{ marginRight: 30, borderBottomWidth: 1, borderColor: colors.border }}
            onChangeText={(text) => searchFilterFunction(text)}
            value={searchText}
          />
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  padding: 5,
                  borderBottomWidth: 1,
                  borderColor: "lightgray",
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                }}
                onPress={() => onCountryChange(item.code)}>
                <View style={{ flexDirection: 'row', width: Dimensions.get('window').width - 120 }}>
                  <Text style={{ fontSize: 25 }}>{item.flag}</Text>
                  <Text style={{ fontSize: 16, marginTop: 7, marginLeft: 20 }}>{item.en}</Text>
                </View>
                <Text style={{ fontSize: 16, marginTop: 7 }}>{item.dialCode}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Button
          full
          onPress={() => phoneInput.current.hideModal()}>
          {t('close')}
        </Button>
      </Modal>
    )
  }

  return (
    <View style={[BaseStyle.textInput, { backgroundColor: cardColor }, style]}>
      <IntlPhoneInput
        ref={phoneInput}
        onChangeText={onChangePhonText}
        phoneInputStyle={inPutStyle}
        defaultCountry="PK"
        containerStyle={{ padding: 0, margin: 0, backgroundColor: 'rgba(0,0,0,0.0)' }}
        dialCodeTextStyle={{ padding: 0, margin: 0 }}
        flagStyle={{ marginLeft: -15, }}
        closeButtonStyle={{ borderTopWidth: 2, borderColor: colors.primary }}
        modalCountryItemCountryNameStyle={{ color: 'gray' }}
        // customModal={SelectCountry}
        placeholder="3XX XXXXXXX"
        success={success}
      />
      {icon}
    </View>
  );
}

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  success: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  textAlignVertical: PropTypes.string,
  icon: PropTypes.node,
  onSubmitEditing: PropTypes.func,
};

Index.defaultProps = {
  style: {},
  onChangeText: text => { },
  onFocus: () => { },
  placeholder: 'Placeholder',
  value: '',
  success: true,
  secureTextEntry: false,
  keyboardType: 'default',
  multiline: false,
  textAlignVertical: 'center',
  icon: null,
  onSubmitEditing: () => { },
};
