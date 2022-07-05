import * as React from 'react';
import { Text, View,TextInput, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RadioButton } from 'react-native-paper';




function SigninScreen() {
  

  
  return (
    <View style={{ flex:1, alignItems: 'center'  }}>
      <View >
      <View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"90%",
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:"white", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
        }}
        >
           <TextInput placeholder="Email"
                        placeholderTextColor={'grey'}
                        style={{
                          marginLeft:20,
                          marginRight:260,
                          backgroundColor:"white",
                         }}
                        autoCapitalize='none'
                    />
            
</View>
      </View>
       
      <View >
      <View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"90%",
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:"white", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
        }}
        >
           <TextInput placeholder="Password"
                        placeholderTextColor={'grey'}
                        style={{
                          marginLeft:20,
                          marginRight:230,
                          backgroundColor:"white",
                         }}
                        autoCapitalize='none'
                    />
            
</View>
<View style={{alignItems:'center', marginTop:30}}>
  <TouchableOpacity>
<Text style={{fontSize:20, color:'silver'}}>Forget Password</Text>
</TouchableOpacity>
</View>

<View style={{marginTop:350, }}>
<TouchableOpacity style={{borderColor:'orange', backgroundColor: 'orange',borderWidth:1,borderRadius:10,paddingHorizontal: 60,paddingVertical:10, alignItems:'center'}}>
      <Text style={{fontSize:25, color:'#fff'}}>CONTINUE</Text>
    </TouchableOpacity>
</View>
      </View>

      
      
    </View>
    
    
  );
}

function SignupScreen() {
  
  const [checked, setChecked] = React.useState('first');
  return (
    
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"90%",
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:"white", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
        }}
        >
           <TextInput placeholder="Full Name"
                        placeholderTextColor={'grey'}
                        style={{
                          marginLeft:20,
                          backgroundColor:"white",
                          
                        }}
                        autoCapitalize='none'
                    />
            
</View>

<View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"90%",
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:"white", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
        }}
        >
           <TextInput placeholder="User Name"
                        placeholderTextColor={'grey'}
                        style={{
                          marginLeft:20,
                          backgroundColor:"white",
                          
                        }}
                        autoCapitalize='none'
                    />
            
</View>

<View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"90%",
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:"white", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
        }}
        >
           <TextInput placeholder="Email"
                        placeholderTextColor={'grey'}
                        style={{
                          marginLeft:20,
                          backgroundColor:"white",
                          
                        }}
                        autoCapitalize='none'
                    />
            
</View>
<View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"90%",
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:"white", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
        }}
        >
           <TextInput placeholder="Password"
                        placeholderTextColor={'grey'}
                        style={{
                          marginLeft:20,
                          backgroundColor:"white",
                          
                        }}
                        autoCapitalize='none'
                    />
            
</View>
<View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"90%",
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:"white", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
        }}
        >
           <TextInput placeholder="Country"
                        placeholderTextColor={'grey'}
                        style={{
                          marginLeft:20,
                          backgroundColor:"white",
                          
                        }}
                        autoCapitalize='none'
                    />
            
</View>
<View>

<Text style={{fontSize:30, marginRight:230, marginTop:20, }}> I am a:</Text>

</View>

<View >
  <View style={{flexDirection:'row',marginTop:20, marginRight:220}}>
  
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        buttonInnerColor={'#e74c3c'}
        
      />
      <Text style={{fontSize:22}}>
      Driver
    </Text>
      </View>
      <View style={{flexDirection:'row',marginTop:20,}}>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{fontSize:22}}>
      Customer
    </Text>
    
      </View>

    </View>
    <View style={{marginTop:30, }}>
<TouchableOpacity style={{borderColor:'orange', backgroundColor: 'orange',borderWidth:1,borderRadius:10,paddingHorizontal: 100,paddingVertical:10, alignItems:'center'}}>
      <Text style={{fontSize:25, color:'#fff'}}>CONTINUE</Text>
    </TouchableOpacity>
</View>

    </View>


    
  );
}

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sign IN" component={SigninScreen} />
        
        <Tab.Screen name="SignUp" component={SignupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}