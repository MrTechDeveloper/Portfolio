import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

let {height} = Dimensions.get('window');
let {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewOuter: {
    flexDirection: 'row',
    justifyContent:'center',
    marginTop:10
   
  },
  viewBtnLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    borderRadius:100,
    height:36,
    width:36,
    borderWidth: 1,
    borderColor: 'orange',
    },
  viewBtnRight:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    borderRadius:100,
    height:36,
    width:36,
    borderWidth: 1,
    borderColor: 'orange',
    },
  viewTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:28,
   
    borderColor: '#eeeeee',
    height:38,
    width: 55
  },
  labelStyle:{
    fontSize: 22,
    marginTop:3


  },
});
export default styles;