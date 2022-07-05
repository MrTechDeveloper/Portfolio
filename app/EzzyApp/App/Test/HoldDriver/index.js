import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button,
    StyleSheet,Dimensions,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedbackBase,
    FlatList,
    SectionList, useWindowDimensions,
    Pressable
  
  } from 'react-native';

  const HoldDriver =()=>{
    return (
        <View>
                <View style={{flexDirection:'row'}}>
          <Image  style={{height:28, width:22,alignSelf: "center",marginLeft:10}} source={require('../images/blackmancard.png')} />
          <TextInput placeholder="Name on a sign the drivers hold"
          placeholderTextColor={'grey'}
            style={{ marginLeft:20,backgroundColor:"white"}}
                    autoCapitalize='none'
            />

 </View>
        </View>
    )
  }


  export default  HoldDriver;