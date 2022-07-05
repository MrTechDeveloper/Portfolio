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
  import FontAwesome from 'react-native-vector-icons/FontAwesome';


const OfferPrice = () => {
    const [servicesColappas, setServicesColappas] = useState(false);
    return (
        <View style={{ borderWidth: 0.5, padding: 5, borderColor:"white", borderRadius: 5, marginTop: 10 }}>
        <Pressable
          onPress={() => setServicesColappas(!servicesColappas)}
          style={({ pressed }) => [{ flexDirection: 'row', alignItems: 'center', },]}
          android_ripple={{ color:"white" }} >
          <View style={{marginLeft:10, flexDirection:'row'}}>
        <FontAwesome name={servicesColappas ? "bank": "bank"} size={18} color="orange" />
          <Text style={{fontSize:15, marginLeft:16}} >{('Offer Your Price')}</Text>
         </View>
        </Pressable>

       <View></View>
<View  style={{marginLeft:10,marginRight:10, marginTop:6}}>

</View> 

        {servicesColappas &&
          <View style={{flexDirection:'row'}}>
          <Image  style={{height:18, width:20,alignSelf: "center",marginLeft:10}} source={require('../images/Pak.png')} />
          <TextInput placeholder="PKR"
          placeholderTextColor={'grey'}
            style={{ marginLeft:20,backgroundColor:"white"}}
                    autoCapitalize='none'
            />

 </View>

 
 
}

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.4,
    marginLeft:20,
    marginRight:20,
   marginTop:8
}}/>
      </View>
    )
}

export default  OfferPrice;