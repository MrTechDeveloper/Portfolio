import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
    ToastAndroid,
} from 'react-native';
// import Video from 'react-native-video';
import { BaseStyle, BaseColor, Images, useTheme } from '@config';
import {
    Image,
    Text,
    Icon
} from '@components';
import ConfirmationModal from "./ConfirmationModal/index.js";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';

const App = (props) => {
    const { colors } = useTheme();
    const [filePath, setFilePath] = useState({});
    const [URI, setURI] = useState('');
  
    // console.log(URI)
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                // console.warn(err);
                console.log('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    ToastAndroid.show(
                        'User cancelled camera picker',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    );
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    ToastAndroid.show(
                        'Camera not available on device',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    );
                    return;
                } else if (response.errorCode == 'permission') {
                    ToastAndroid.show(
                        'Permission not satisfied',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    );
                    return;
                } else if (response.errorCode == 'others') {
                    ToastAndroid.show(
                        response.errorMessage.toString(),
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    );
                    return;
                }

                props.name(response.fileName);
                props.uri(response.uri);

                if (props.videoSize) {
                    props.videoSize(response.fileSize)
                }

                setFilePath(response);
            });
        }
    };

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                ToastAndroid.show(
                    'User cancelled camera picker',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                ToastAndroid.show(
                    'Camera not available on device',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
                return;
            } else if (response.errorCode == 'permission') {
                ToastAndroid.show(
                    'Permission not satisfied',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
                return;
            } else if (response.errorCode == 'others') {
                ToastAndroid.show(
                    response.errorMessage.toString(),
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
                return;
            }

            props.name(response.fileName);
            props.uri(response.uri);

            if (props.videoSize) {
                props.videoSize(response.fileSize)
            }
            setFilePath(response);
        });
    };

    const ImageView = () => {
        if (filePath.uri) {
            return <>
                {props.type != 'video' ?
                    <Image
                        source={{ uri: filePath.uri }}
                        style={[styles.imageStyle, props.imageStyle]}
                    />
                    :
                    <>
                        {filePath.uri != "" &&
                            <Image
                                source={{ uri: filePath.uri }}
                                style={[styles.imageStyle, props.imageStyle]}
                            />
                            // <Video
                            //     source={{ uri: filePath.uri }}
                            //     style={[styles.imageStyle, props.imageStyle]}
                            //     controls={true}
                            //     fullscreen={true}
                            //     resizeMode={"cover"}
                            //     paused={true}
                            // />
                        }
                    </>
                }
            </>
        } else if (props.isThereEmpty != '' && !filePath.uri) {
            return (
                <>
                    {props.type == 'video' ?
                        <View>
                            {URI != '' &&
                                <Image
                                    source={{ uri: URI }}
                                    style={[styles.imageStyle, props.imageStyle]}
                                />
                                // <Video
                                //     source={{ uri: URI }}
                                //     style={[styles.imageStyle, props.imageStyle]}
                                //     controls={true}
                                //     fullscreen={true}
                                //     resizeMode={"cover"}
                                //     paused={true}
                                // />
                            }
                            <FontAwesome
                                style={{ height: 30, width: 30, position: 'absolute', bottom: 20, right: 20, backgroundColor: "#fff", padding: 5, borderRadius: 30 }}
                                name="pencil"
                                size={20}

                                color={colors.primary} />
                        </View>
                        :
                        <View>
                            <Image
                                source={{ uri: URI }}
                                style={[styles.imageStyle, props.imageStyle]} />
                            <FontAwesome
                                style={{ height: 30, width: 30, position: 'absolute', bottom: 20, right: 20, backgroundColor: "#fff", padding: 5, borderRadius: 30 }}
                                name="pencil"
                                size={20}
                                color={colors.primary} />
                        </View>
                    }
                </>
            )
        } else {
            return <View>
                {props.defaultImage ?
                    <View>
                        <Image
                            source={props.defaultImage}
                            style={[styles.imageStyle, props.imageStyle]} />
                        <FontAwesome
                            style={{ height: 30, width: 30, position: 'absolute', bottom: 20, right: 20, backgroundColor: "#fff", padding: 5, borderRadius: 30 }}
                            name="pencil"
                            size={20}
                            color={colors.primary} />
                    </View>
                    :
                    <>
                        <FontAwesome
                            name="upload"
                            size={40}
                            color={colors.primary}
                        />
                        {props.label && <Text grayColor style={{ marginTop: 5 }}>{props.label}</Text>}
                    </>
                }
            </View>
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}

                {/* <Text style={styles.textStyle}>{filePath.uri}</Text> */}
                <ConfirmationModal
                    style={[styles.buttonStyle, { borderColor: colors.border }, props.style]}
                    actionText="Delete"
                    confirmationMessage="Are you user you want to delete"
                    action={() => { captureImage(props.type ? props.type : 'photo')}}
                    action2={() => { chooseFile(props.type ? props.type : 'photo') }}>
                        <ImageView />
                    {/* <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.buttonStyle, { borderColor: colors.border }, props.style]}
                        onPress={() => chooseFile(props.type ? props.type : 'photo')}>
                        
                    </TouchableOpacity> */}
                </ConfirmationModal>
                {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera for Image
          </Text>
          </TouchableOpacity> */}
                {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera for Image
          </Text>
        </TouchableOpacity> */}
                {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text style={styles.textStyle}>
            Launch Camera for Video
          </Text>
        </TouchableOpacity> */}

                {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('video')}>
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderStyle: 'dashed',
        borderRadius: 1,

        width: 200,
        height: 150,
    },
    imageStyle: {
        width: 200,
        height: 150,
        margin: 5,
        borderStyle: 'dashed',
        borderRadius: 1,
    },
});