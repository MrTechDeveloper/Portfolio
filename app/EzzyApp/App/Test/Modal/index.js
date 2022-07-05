// import React, { useState, useRef, useEffect } from "react";

// import {
//   Modal,
//   View,
//   StyleSheet,
//   Animated,
//   Dimensions,
//   PanResponder,
//   TouchableWithoutFeedback,
//   Easing,
//   ImageBackground,
//   Keyboard,
// } from "react-native";

// const { height } = Dimensions.get("window");

// const SwipeUpDownModal = (props) => {
//   const TIMING_CONFIG = {
//     duration: props.duration ? props.duration : 450,
//     easing: Easing.inOut(Easing.ease),
//   };

//   const pan = useRef(new Animated.ValueXY()).current;

//   let [isAnimating, setIsAnimating] = useState(
//     props.DisableHandAnimation ? true : false
//   );

//   let animatedValueX = 0;

//   let animatedValueY = 0;

//   const panResponder = useRef(
//     PanResponder.create({
//       // Ask to be the responder:
//       onStartShouldSetPanResponder: () => false,
//       onStartShouldSetPanResponderCapture: () => false,
//       onMoveShouldSetPanResponder: (evt, gestureState) => {
//         if (isAnimating) {
//           return false;
//         }
//         if (gestureState.dy > 22) {
//           return true;
//         }
//         return false;
//       },
//       onPanResponderGrant: () => {
//         pan.setOffset({
//           x: animatedValueX,
//           y: animatedValueY,
//         });
//         pan.setValue({ x: 0, y: 0 }); // Initial value
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         if (gestureState.dy > 0) {
//           pan.setValue({ x: 0, y: gestureState.dy });
//         }
//       },
//       onPanResponderRelease: (evt, gestureState) => {
//         // The user has released all touches while this view is the
//         // responder. This typically means a gesture has succeeded
//         // Flatten the offset so it resets the default positioning
//         if (gestureState.dy > 0 && gestureState.vy > 0) {
//           if (gestureState.vy <= -0.7 || gestureState.dy <= -100) {
//             setIsAnimating(true);
//             Animated.timing(pan, {
//               toValue: { x: 0, y: -height },
//               ...TIMING_CONFIG,
//               useNativeDriver: false,
//             }).start(() => {
//               setIsAnimating(false);
//               props.onClose();
//             });
//           } else if (gestureState.vy >= 0.5 || gestureState.dy >= 100) {
//             setIsAnimating(true);
//             Animated.timing(pan, {
//               toValue: { x: 0, y: height },
//               ...TIMING_CONFIG,
//               useNativeDriver: false,
//             }).start(() => {
//               setIsAnimating(false);
//               props.onClose();
//             });
//           } else {
//             setIsAnimating(true);
//             Animated.spring(pan, {
//               toValue: 0,
//               useNativeDriver: false,
//             }).start(() => {
//               setIsAnimating(false);
//               // props.onClose();
//             });
//           }
//         } else {
//           setIsAnimating(true);
//           Animated.spring(pan, {
//             toValue: 0,
//             useNativeDriver: false,
//           }).start(() => {
//             setIsAnimating(false);
//             // props.onClose();
//           });
//         }
//       },
//     })
//   ).current;

//   useEffect(() => {
//     if (props.modalVisible) {
//       animatedValueX = 0;
//       animatedValueY = 0;
//       pan.setOffset({
//         x: animatedValueX,
//         y: animatedValueY,
//       });
//       pan.setValue({
//         x: 0,
//         y: props.OpenModalDirection == "up" ? -height : height,
//       }); // Initial value
//       pan.x.addListener((value) => (animatedValueX = value.value));
//       pan.y.addListener((value) => (animatedValueY = value.value));
//     }
//   }, [props.modalVisible]);

//   useEffect(() => {
//     if (props.PressToanimate) {
//       setIsAnimating(true);
//       Animated.timing(pan, {
//         toValue: {
//           x: 0,
//           y: props.PressToanimateDirection == "up" ? -height : height,
//         },
//         ...TIMING_CONFIG,
//         useNativeDriver: false,
//       }).start(() => {
//         setIsAnimating(false);
//         props.onClose();
//       });
//     }
//   }, [props.PressToanimate]);

//   let handleGetStyle = (opacity) => {
//     return [
//       [
//         styles.container,
//         {
//           transform: [{ translateX: pan.x }, { translateY: pan.y }],
//           opacity: opacity,
//         },
//         [props.HeaderStyle],
//       ],
//     ];
//   };

//   let handleGetStyleBody = (opacity) => {
//     return [
//       [
//         styles.background,
//         {
//           transform: [{ translateX: pan.x }, { translateY: pan.y }],
//           opacity: opacity,
//         },
//       ],
//       [props.ContentModalStyle],
//     ];
//   };
//   let handleMainBodyStyle = (opacity) => {
//     return [
//       [
//         styles.ContainerModal,
//         {
//           opacity: opacity,
//         },
//       ],
//       [props.MainContainerModal],
//     ];
//   };

//   let interpolateBackgroundOpacity = pan.y.interpolate({
//     inputRange: [-height, 0, height],
//     outputRange: [props.fade ? 0 : 1, 1, props.fade ? 0 : 1],
//   });

//   return (
//     <Modal
//       animationType="none"
//       transparent={true}
//       visible={props.modalVisible}
//       onShow={() => {
//         setIsAnimating(true);
//         Animated.timing(pan, {
//           ...TIMING_CONFIG,
//           toValue: { x: 0, y: 0 },
//           useNativeDriver: false,
//         }).start(() => {
//           setIsAnimating(false);
//         });
//       }}
//       onRequestClose={props.onRequestClose}
//     >
//       <Animated.View style={handleMainBodyStyle(interpolateBackgroundOpacity)}>
//         <Animated.View
//           style={handleGetStyleBody(interpolateBackgroundOpacity)}
//           {...panResponder.panHandlers}
//         >
//           <TouchableWithoutFeedback
//             onPress={() => Keyboard.dismiss()}
//             style={styles.TouchWithoutFeedBack}
//           >
//             <ImageBackground
//               source={props.ImageBackgroundModal && props.ImageBackgroundModal}
//               style={styles.ImageBackground}
//               imageStyle={
//                 props.ImageBackgroundModalStyle &&
//                 props.ImageBackgroundModalStyle
//               }
//             >
//               {props.ContentModal}
//             </ImageBackground>
//           </TouchableWithoutFeedback>
//         </Animated.View>
//         <Animated.View
//           style={handleGetStyle(interpolateBackgroundOpacity)}
//           {...panResponder.panHandlers}
//         >
//           <TouchableWithoutFeedback>
//             {props.HeaderContent ? props.HeaderContent : <View />}
//           </TouchableWithoutFeedback>
//         </Animated.View>
//       </Animated.View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     opacity: 0,
//     flex: 1,
//     marginTop: 55,
//   },
//   container: {
//     marginTop: 50,
//     position: "absolute",
//     width: "100%",
//   },
//   ContainerModal: { backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1 },
//   ImageBackground: {
//     width: "100%",
//     height: "100%",
//   },
//   TouchWithoutFeedBack: { flex: 1 },
// });

// export default SwipeUpDownModal;


import React, { useRef,useState} from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import Modal from 'react-native-modal';
// import Childseat from '../Childseat/index';

  
const ModalComp = () => {
  const [modalVisible, setModalVisible] = useState(true);
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
      duration: 800,
      useNativeDriver:true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver:true,
    }).start();
  };
return (
<View >
 

<Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          },
          
        ]}
        
      >

{/* <Modal
   animationType="slide"
        isVisible={modalVisible}
        onSwipeComplete={() => {
          setModalVisible();
          onCancel();
        }}
        swipeDirection={['down']}
        
      >  */}
<View style= {{height:200, width:150, backgroundColor:'orange'}}>
<Text>hahhahah</Text>
<View style={{height:60, width:50, marginTop:150}}>
<Button title="OK" onPress={fadeOut} />
</View>

</View>




           {/* </Modal>  */}
</Animated.View>

     
    
<View style={{marginTop:90}}>
<Button title="yes" onPress={fadeIn} />
</View>
        
        {/* <Button title="go"  onPress={changeState} type="button">
          </Button>  */}

     


           {/* <Button title="ok"  /> */}
 
       
   
  </View>
  )
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

export default ModalComp ;