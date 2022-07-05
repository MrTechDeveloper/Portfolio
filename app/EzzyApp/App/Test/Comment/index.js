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
   
  const Comment =()=>{
    const[comment, setComment]= useState(false);
    // const [servicesColappas, setServicesColappas] = useState(false);
    return (
        <View>
                   <View style={{flexDirection:'row'}}>
          <Image  style={{height:16, width:20,marginLeft:10, marginTop:10}} source={require('../images/comment.png')} />
          <View style={{flexDirection:'column'}}>
          <TouchableOpacity >
          <Text style={{fontSize:12, marginLeft:12, marginTop:6}}>
            Comment
          </Text>
          </TouchableOpacity>
          <TextInput placeholder="I need an English speaking driver"
          placeholderTextColor={'grey'}
          value={comment}
            style={{ marginLeft:10,backgroundColor:"white",}}
                    autoCapitalize='none'
            />
            </View>
          
 </View>
 <View style={{flexDirection:'row',alignContent:'space-between'}}>
           <TouchableOpacity onPress={() => setComment('I Need WIFI')} 
             style={{
              marginTop:10,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 40,
              paddingVertical: 3,
              alignItems: 'center',
              backgroundColor: "#F2F6F7",
            }}>
           <View>
           <Text style={{fontSize:18,marginLeft:10, marginRight:10}}>I Need WiFi</Text>
           </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => setComment('I Need Male Driver')} 
             style={{
              marginTop:10,
              marginLeft: 10,
              marginRight: 20,
              borderRadius: 40,
              paddingVertical: 3,
              alignItems: 'center',
              backgroundColor: "#F2F6F7",
            }}>
           <View >
           <Text style={{fontSize:18,marginLeft:10, marginRight:10}}>I Need A Male Driver</Text>
           </View>

            </TouchableOpacity>
           </View>

         
        </View>
    )
  }

  export default Comment ;