import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { BaseColor, useTheme, useFont } from "@config";
import { useTranslation } from "react-i18next";
import { useDispatch, connect, useSelector } from "react-redux";
import CustomDrawerContent from "./App/CustomDrawerContent/index";

import Test from "./App/Test";



const MainDrawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

export default function DrawerNavigator() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const CURRENT_LOCATION = useSelector(
  //   (state) => state.CURRENT_LOCATION.customLocation
  // );
  // const gender = useSelector((state) => state.FINDER_DATA.gender);

  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState(null);
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {}, []);
  return (
    <MainDrawer.Navigator
      initialRouteName={"BottomTabNavigator"}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <MainDrawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </MainDrawer.Navigator>
  );
}

function BottomTabNavigator() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const font = useFont();
  const starRef = [];

  return (
    <BottomTab.Navigator
      initialRouteName="HomeNavigator"
      headerMode="none"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.darkGrayColo,
        style: {
          borderTopWidth: 0,
          borderColor: BaseColor.dividerColor,
          backgroundColor: colors.background,
        },
        labelStyle: {
          fontSize: 14,
          fontFamily: font,
          fontWeight: "bold",
        },
      }}>
      <BottomTab.Screen
        options={{
          title: t("Test"),
        }}
        name="Test"
        component={Test}
      />
    </BottomTab.Navigator>
  );
}

