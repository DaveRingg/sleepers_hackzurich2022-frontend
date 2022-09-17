import "react-native-gesture-handler";
import React from "react";
import { StatusBar, LogBox } from "react-native";
import SplashScreen from "react-native-splash-screen";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";
import { RecoilRoot } from "recoil";

LogBox.ignoreAllLogs();

const App = () => {
  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");

    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, []);

  return (
    <>
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </>
  );
};

export default App;
