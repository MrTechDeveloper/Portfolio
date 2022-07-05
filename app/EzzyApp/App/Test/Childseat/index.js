import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView ,Image,} from "react-native";
import INCDEC from '../INCDEC/index';


const Childseat=()=>{
 return (
        <View>
       
        <Text style={{fontSize:20, fontWeight:'normal',  marginRight:20, marginLeft:20, color:'black'}}> Choose child seats</Text>

        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:30, marginLeft:10, }}>
        <Image  style={{height:80, width:60, }} source={require('../images/child1.png')} />
        <Image  style={{height:80, width:60, }} source={require('../images/child5.png')} />
        <Image  style={{height:80, width:82, }} source={require('../images/child6.png')} />

</View>

<View style={{marginTop:10, flexDirection:'row',
  }}>
<View style={{flexDirection:'column'}}>

<Text style={{fontSize:16, fontWeight:'normal', marginTop:20,   color:'black',marginLeft:12}}>Infant carrier</Text>

<Text style={{fontSize:12, fontWeight:'normal', marginTop:4, marginRight:20, marginLeft:13}}>up to 10 kg, 6 months</Text>
</View>
<View style={{marginTop:30, flexDirection:'row', marginLeft:14}}>
<INCDEC/>
</View>


</View>
<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.4,
    marginLeft:18,
    marginRight:18,
    marginTop:15
}}/>


<View style={{marginTop:10, flexDirection:'row'}}>
<View style={{flexDirection:'column'}}>

<Text style={{fontSize:18, fontWeight:'normal', marginTop:20,  marginLeft:12, color:'black'}}>Convertible seat</Text>

<Text style={{fontSize:12, fontWeight:'normal', marginTop:4, marginRight:20,marginLeft:15}}>9-25 kg, 0-7 years</Text>
</View>
<View style={{marginTop:30, flexDirection:'row', marginLeft:19}}>
<INCDEC/>
</View>


</View>
<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.4,
    marginLeft:18,
    marginRight:18,
    marginTop:15
}}/>

<View style={{marginTop:10, flexDirection:'row',}}>
<View style={{flexDirection:'column'}}>

<Text style={{fontSize:18, fontWeight:'normal', marginTop:20,  marginLeft:14, color:'black'}}>Booster seat</Text>

<Text style={{fontSize:12, fontWeight:'normal', marginTop:4, marginRight:20, marginLeft:14}}>22-36kg, 6-12 years</Text>
</View>
<View style={{marginTop:30, flexDirection:'row', marginLeft:22}}>
<INCDEC/>
</View>


</View>
<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.4,
    marginLeft:18,
    marginRight:18,
    marginTop:15
}}/>

<View style={{marginTop:18, marginBottom:8 }}>
{/* <TouchableOpacity onPress={() => {navigation.navigate('')}}
style={{marginLeft:20, marginRight:20,borderRadius:40,paddingVertical:10, alignItems:'center',  backgroundColor: "#32CD32"}}>
      <Text style={{fontSize:18,color:'#fff' }}>OK</Text>
    </TouchableOpacity> */}
 
</View>


        </View>
    )};

    export default Childseat;