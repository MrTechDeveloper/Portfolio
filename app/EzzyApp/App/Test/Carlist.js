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
  SectionList, useWindowDimensions 

} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

const data =[
  {id:1,name:'Economy',image:require('./images/car10.png'),cross:'From'},
  {id:2,name:'Comfort',image:require('./images/car10.png'),cross:'From'},
  {id:3,name:'Business',image:require('./images/car10.png' ),cross:'From'},
  {id:4,name:'Premium',image:require('./images/car10.png' ),cross:'From'},
  {id:5,name:'VIP',image:require('./images/car10.png' ),cross:'From'},
  {id:6,name:'SUV',image:require('./images/car10.png' ),cross:'From'},
  {id:7,name:'VAN',image:require('./images/car10.png' ),cross:'From'},
  {id:8,name:'Minibus',image:require('./images/car10.png' ),cross:'From'},
  {id:9,name:'Bus',image:require('./images/car10.png' ),cross:'From'},
  {id:10,name:'Bike',image:require('./images/car10.png' ),cross:'From'},
];


const Carlist = () => {
return(
   
<View style={{ flex:1, backgroundColor:'white'}}>
      
<View  style={{marginTop:10, flexDirection:'row'}}>
<Image  style={{height:18, width:18, marginTop:16,marginLeft:6}} source={require('../Test/images/A.png')} />
      

        
<TextInput placeholder="From: address, airport, hotel"
          placeholderTextColor={'black'}
          style={{marginLeft:20,
                         backgroundColor:"white", }}
                        autoCapitalize='none'
                    />
<TouchableOpacity>
<View style={{borderRadius:100, marginTop:10, marginLeft:80, borderColor:'orange', borderWidth:2.2,height:30, width:30,}}>
<View  style={{marginLeft:10,marginRight:10, marginTop:6}}>
<Image  style={{height:17, width:10,alignSelf: "center",}} source={require('../Test/images/pin2.png')} />
</View> 
</View>
</TouchableOpacity>

</View>

<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth:.6,
    marginLeft:30,
    marginRight:30,
    
  }}/>


<View  style={{marginTop:6, flexDirection:'row'}}>
<Image  style={{height:20, width:18, marginTop:16,marginLeft:6}} source={require('../Test/images/B.png')} />
      

        
<TextInput placeholder="To: address, airport, hotel"
          placeholderTextColor={'black'}
          style={{marginLeft:20,
                         backgroundColor:"white", }}
                        autoCapitalize='none'
                    />
<TouchableOpacity>
<View style={{borderRadius:100, marginTop:10, marginLeft:96, borderColor:'orange', borderWidth:2.2,height:30, width:30,}}>
<View  style={{marginLeft:10,marginRight:10, marginTop:6}}>
<Image  style={{height:17, width:10,alignSelf: "center",}} source={require('../Test/images/pin2.png')} />
</View> 
</View>
</TouchableOpacity>

</View>
<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.4,
    marginLeft:20,
    marginRight:20,
   marginTop:8
}}/>

 <FlatList
        numColumns={1}
        horizontal
        // pagingEnabled={true}
     
      data={data}
     
      
      
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        
          
       
            
<ScrollView>
<View style={{backgroundColor:"white",margin:10,padding:30, paddingVertical:1, marginTop:10, borderRadius:10, flexDirection:'row',
      shadowColor: "#000",
      shadowOffset: {
      height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      
      elevation: 2,
      }}>
  <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:14,marginTop:10}}>{item.name}</Text>
  <Image style={{ width:95, height:40, marginTop:8,}} source={item.image} />
  <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.4,
   
    marginTop:15
}}/>
  <Text style={{fontSize:15, color:'gray' ,marginTop:4,}}>{item.cross}</Text>
          
</View>
</View>

        </ScrollView>
        
       
     
      )}
      >
</FlatList>
<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.6,
    marginLeft:20,
    marginRight:20,
  }}/>









            
</View>

       
  

   
)
};


export default  Carlist;