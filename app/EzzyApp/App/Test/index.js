import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { BaseStyle, BaseColor, useTheme } from "@config";
import { Header, SafeAreaView, Icon, Text } from "@components";
import { TabView, TabBar } from "react-native-tab-view";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import Carlist from "../Test/Carlist";
import DatePicker from "../../../components/DatePicker"
import INCDEC from "../../App/Test/INCDEC/index";
import OfferPrice from "./OfferPrice/index";
import Chilpopup from "../Test/Chilpopup/index";
import Comment from "../Test/Comment/index";
import HoldDriver from "./HoldDriver";

export default function index({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const handleIndexChange = (index) => setIndex(index);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [position, setPosition] = useState('relative')

  const [routes] = useState([
    { key: "transfer", title: t("Transfer") },
    { key: "taxi", title: t("Taxi") },
    { key: "perhpur", title: t("Per Hour") },
    { key: "delivery", title: t("Delivery") },
    { key: "carrental", title: t("Car Rental") },
  ]);
  // const [title, setTitle] = React.useState(true);
  // const [i, seti] = React.useState(0);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={[styles.indicator, { backgroundColor: colors.primary }]}
      style={[styles.tabbar, { backgroundColor: colors.background }]}
      tabStyle={[styles.tab, { width: Dimensions.get("window").width / 3 }]}
      inactiveColor={BaseColor.grayColor}
      activeColor={colors.text}
      renderLabel={({ route, focused, color }) => (
        <View style={{ flex: 1, width: 130, alignItems: "center" }}>
          <Text headline semibold={focused} style={{ color }}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );
  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "transfer":
        return <Transfer jumpTo={jumpTo} navigation={navigation} />;
      case "taxi":
        return <Taxi jumpTo={jumpTo} navigation={navigation} />;
      case "perhour":
        return <Perhour jumpTo={jumpTo} navigation={navigation} />;
      case "delivery":
        return <Delivery jumpTo={jumpTo} navigation={navigation} />;
      case "carrental":
        return <Carrental jumpTo={jumpTo} navigation={navigation} />;
    }
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: "always" }}>
      {/* <Header
        title={t('your_booking')}
        renderLeft={() => {
          return <Icon name="arrow-left" size={20} color={colors.primary} />;
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
        renderRight={() => {
          return <Carlist />
          // return <Reload width={20} height={20} fill={colors.primary} />;
        }}
      /> */}
      <View style={{ flex: 1 }}>
        <TabView
          lazy
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={handleIndexChange}
        />
      </View>
    </SafeAreaView>
  );
}
function Transfer({}) {
  return (
    <View >
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Carlist />
        </View>
        <View style={{ marginTop: 10 }}>
          <OfferPrice />
        </View>
        {/* <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth:.4,
    marginLeft:20,
    marginRight:20,
   marginTop:8
}}/> */}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image
            style={{ height: 34, width: 16, marginTop: 10 }}
            source={require("../Test/images/blackman.png")}
          />

          <Text style={{ fontSize: 16, marginTop: 15, marginRight: 90 }}>
            Adults
          </Text>

          <View style={{ marginRight: 20 }}>
            <INCDEC />
          </View>
        </View>

        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.4,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 8,
          }}
        />

        <View>
          <HoldDriver />
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.4,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 8,
          }}
        />

        <TouchableOpacity>
          <View
            style={{
              width: 160,
              marginLeft: 4,
              marginTop: 12,
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Chilpopup />
          </View>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.4,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 16,
          }}
        />
        <View>
          <DatePicker/>
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.4,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 16,
          }}
        />
        <View>
          <DatePicker/>
        </View>
        <View style={{ marginLeft: 6 }}>
          <Comment />
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.4,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 16,
          }}
        />
        <View style={{ margin:45 }} />
      

      </ScrollView>

      <TouchableOpacity
         
          onPress={()=> setPosition('absolute')}
          style={{
            width: 200,
            borderRadius: 40,
            paddingVertical: 6,
            alignItems: "center",
            backgroundColor: "#32CD32",
            alignSelf:'center',
            position: 'absolute', 
            marginTop:530
            
          
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff" }}>Get Offer</Text>
        </TouchableOpacity>
      </View>
     );
}
function Taxi({ navigation, jumpTo }) {
  return (
    <View style={{ flex: 1 }}>
      {/* <Carlist/>  */}
      {/* <DatePicker/> */}
    </View>
  );
}

function Perhour({ navigation, jumpTo }) {
  return (
    // <>
    //         <Button  onPress ={() => {
    //             setTitle(!title)
    //       }} title='title'  >
    //      </Button>
    //      {title &&  <Text>hahah</Text>}
    //    </>
    <View></View>
  );
}

function Delivery({ navigation, jumpTo }) {
  return (
    <View>
      <Button title="kkkkkkkkk" onPress={() => {}} />
    </View>
  );
}

function Carrental({ navigation, jumpTo }) {
  return (
    <View style={{ paddingHorizontal: 10, marginTop: 10, flex: 1 }}></View>
  );
}
