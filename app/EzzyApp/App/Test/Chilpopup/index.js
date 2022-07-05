import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Childseat from '../Childseat/index';

const ModalPoup = ({visible, children}) => {
  // const [title, setTitle] = React.useState(false);
  // const [i, seti] = React.useState(0);

  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Chilpopup = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}></View>
        </View>
        <Childseat/>

        <View style={{marginBottom: 8}}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 40,
              paddingVertical: 10,
              alignItems: 'center',
              backgroundColor: '#32CD32',
            }}>
            <Text style={{fontSize: 18, color: '#fff'}}>OK</Text>
          </TouchableOpacity>
        </View>
      </ModalPoup>

      <TouchableOpacity onPress={() => setVisible(true)} style={{marginRight:20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Image  style={{height:20, width:20, }} source={require('../images/baby1.png')} />
          <Text style={{fontSize: 16, color: 'black', marginLeft: 18}}>
            Child Seats
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    paddingHorizontal: 8,

    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Chilpopup;
