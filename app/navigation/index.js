import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DarkModeProvider } from "react-native-dark-mode";
import { useTheme, BaseSetting } from "@config";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useSelector } from "react-redux";
import Loading from "../EzzyApp/App/Loading";
import Main from "../EzzyApp/index";


const RootStack = createStackNavigator();

export default function Navigator() {
  const storeLanguage = useSelector((state) => state.application.language);
  const { theme, colors } = useTheme();

  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: BaseSetting.resourcesLanguage,
      lng: storeLanguage ?? BaseSetting.defaultLanguage,
      fallbackLng: BaseSetting.defaultLanguage,
    });
    StatusBar.setBackgroundColor(colors.primary, true);
    StatusBar.setBarStyle("light-content", true);
  }, []);

  return (
    <DarkModeProvider>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator
          mode="modal"
          headerMode="none"
        >
          <RootStack.Screen
            name="Loading"
            component={Loading}
            options={{ gestureEnabled: false }}
          />

          <RootStack.Screen
            name="Main"
            component={Main}
            options={{ gestureEnabled: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
}
