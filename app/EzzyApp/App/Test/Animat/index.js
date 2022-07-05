import React, { useRef,useState} from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import Childseat from '../Childseat/index';
// import Modal from './Src/Components/Modal/index'
const Animat = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [state, setstate] = useState({data:""});
  const changeState = () => {  
    setstate({data:`state/props of parent component 
    is send by onClick event to another component`}); 
   }; 

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 800
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          },
          
        ]}
        
      >
       <Childseat/>
       {/* <Modal/> */}
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Child Screen" onPress={fadeIn} />
        <Button title="OK" onPress={fadeOut} />
        <Button title="Child Screen"  onPress={changeState} type="button">
                
                </Button> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "white"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default Animat;