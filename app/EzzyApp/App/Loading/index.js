import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StatusBar, Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Images, BaseColor, useTheme } from '@config';
import {
  Image, Text, Icon,
  TextInput,
  Loader,
  Text as CustomText
} from '@components';

import styles from './styles';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Loading({ navigation }) {
  const { colors } = useTheme();
  const [LogoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const [LogoAnimationComplete2, setLogoAnimationComplete2] = useState(false);
  const [NameComplete, setNameComplete] = useState(false);
  const [CaptionAnimationComplete, setCaptionAnimationComplete] = useState(false);
  const [IconsComplete, setIconsComplete] = useState(false);
  const [IconsComplete2, setIconsComplete2] = useState(false);

  useEffect(() => {
    navigation.navigate('Main')
  }, []);

  return (
    <LinearGradient
      colors={['#fff', '#fff']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={Images.splash_bg} resizeMode="cover" style={[{ width: '100%', height: '100%' }, styles.container]} >
        {/*       
      {CaptionAnimationComplete && !IconsComplete2 &&
        <>
          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 50, right: width - 50 - 20 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation={"fadeIn"}>
            <Household width={50} height={50} fill={BaseColor.yellowColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 50, left: width - 50 - 20 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <FarmingTtools width={50} height={50} fill={BaseColor.redColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 100 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <Construction width={50} height={50} fill={BaseColor.greenColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 200, right: width - 50 - 20 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <Fitness width={50} height={50} fill={colors.primary} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 200, left: width - 50 - 20 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <Rating width={50} height={50} fill={BaseColor.yellowColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', bottom: 100, right: width - 50 - 20 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <Medical width={50} height={50} fill={BaseColor.redColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', bottom: 100, left: width - 50 - 20 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <Car width={50} height={50} fill={colors.primary} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', bottom: 10 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <BeautyNfashion width={50} height={50} fill={BaseColor.greenColor} />
          </Animatable.View>
        </>}

      {IconsComplete &&
        <>
          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 50, right: width - 50 - 20 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <Household width={50} height={50} fill={BaseColor.yellowColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 50, left: width - 50 - 20 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <FarmingTtools width={50} height={50} fill={BaseColor.redColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 100 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <Construction width={50} height={50} fill={BaseColor.greenColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 200, right: width - 50 - 20 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <Fitness width={50} height={50} fill={colors.primary} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', top: 200, left: width - 50 - 20 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <Rating width={50} height={50} fill={BaseColor.yellowColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', bottom: 100, right: width - 50 - 20 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <Medical width={50} height={50} fill={BaseColor.redColor} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', bottom: 100, left: width - 50 - 20 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <Car width={50} height={50} fill={colors.primary} />
          </Animatable.View>

          <Animatable.View
            style={{ zIndex: 3, position: 'absolute', bottom: 10 }}
            onAnimationBegin={() => { setIconsComplete2(true); }}
            animation="fadeOut"
            delay={3000} >
            <BeautyNfashion width={50} height={50} fill={BaseColor.greenColor} />
          </Animatable.View>
        </>} */}

        <View style={styles.content}>
          {!LogoAnimationComplete ?
            <Animatable.View
              style={{ zIndex: 3, position: 'absolute' }}
              ref={(ref) => starRef = ref}
              direction="alternate"
              // iterationCount="infinite" 
              duration={2000}
              onAnimationEnd={() => { setLogoAnimationComplete(true); }}
              animation="slideInUp" >
              <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
            </Animatable.View>
            :
            <Animatable.View
              style={{ zIndex: 3, position: 'absolute' }}
              ref={(ref) => starRef = ref}
              direction="alternate"
              // iterationCount="infinite" 
              duration={1000}
              onAnimationEnd={() => { setLogoAnimationComplete2(true); }}
              animation="rotate" >
              <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
            </Animatable.View>
          }
          {LogoAnimationComplete2 &&
            <>
              <Animatable.View
                style={{ position: 'absolute', top: 80 }}
                ref={(ref) => starRef = ref}
                direction="alternate"
                // iterationCount="infinite"
                onAnimationEnd={() => { setNameComplete(true); }}
                duration={1000}
                animation="zoomIn" >
                <Image source={Images.logo_name} style={styles.logo1} resizeMode="contain" />
                {/* <Text title1 primaryColor semibold>EzzyApp</Text> */}
              </Animatable.View>

              {NameComplete && <Animatable.View
                style={{ position: 'absolute', top: 120 }}
                ref={(ref) => starRef = ref}
                direction="alternate"
                // iterationCount="infinite"
                onAnimationEnd={() => { setCaptionAnimationComplete(true); }}
                duration={1000}
                animation="zoomIn" >
                <Image source={Images.logo_caption} style={styles.logo2} resizeMode="contain" />
                {/* <Text title2 bold> 
              <Text style={{ color: BaseColor.yellowColor }}>Easy </Text>
              <Text style={{ color: BaseColor.redColor }}>ho </Text>
              <Text style={{ color: BaseColor.greenColor }}>jao </Text>
              <Text primaryColor>...!</Text></Text> */}
              </Animatable.View>
              }
            </>
          }

          {CaptionAnimationComplete && <Animatable.View
            style={{ position: 'absolute', top: 160 }}
            ref={(ref) => starRef = ref}
            direction="alternate"
            // iterationCount="infinite"
            duration={3000}
            animation="zoomInUp" >
            <ActivityIndicator
              size="large"
              color={colors.primary}
              style={{
                marginTop: 20,
              }}
            />
          </Animatable.View>}

        </View>
        {CaptionAnimationComplete && !IconsComplete2 &&
          <Animatable.View
            style={{ position: 'absolute', bottom: 20 }}
            onAnimationEnd={() => { setIconsComplete(true); }}
            animation="fadeIn" >
            <Text bold style={{ color: '#EC7211' }}>Product of B Concept Technologies {'&'} Services</Text>
          </Animatable.View>
        }
      </ImageBackground>
    </LinearGradient>
  );
}
