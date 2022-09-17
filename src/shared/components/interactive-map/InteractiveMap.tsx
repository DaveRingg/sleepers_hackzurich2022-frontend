/* eslint-disable react-native/no-unused-styles */
import { COLORS } from "@shared-constants";
import React, { useMemo } from "react";
import { Image, StyleProp, StyleSheet, View } from "react-native";

type RoomMode = "Active" | "Off" | "Transparent";

interface InteractiveMapProps {
  kitchen: RoomMode;
  livingroom: RoomMode;
  bedroom: RoomMode;
  bathroom: RoomMode;
  office: RoomMode;
}

const styles = StyleSheet.create({
  baseImage: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: 235,
    resizeMode: "contain",
  },
});
const MODE_MAIN_STYLE = {
  Active: {},
  Off: { opacity: 0.3 },
  Transparent: { opacity: 0.32 },
};

const MODE_OVERLAY_STYLE = {
  Active: { display: "none" },
  Off: { opacity: 0.9 },
  Transparent: { display: "none" },
};

export const BUTTON_POSITION_STYLES = StyleSheet.create({
  livingroom: { position: "absolute", left: "17%", top: "38%" },
  bedroom: { position: "absolute", left: "49%", top: "56%" },
  kitchen: { position: "absolute", right: "8%", top: "50%" },
  bathroom: { position: "absolute", right: "32%", top: "10%" },
  office: { position: "absolute", right: "8%", top: "10%" },
});

export const InteractiveMap = ({
  kitchen,
  livingroom,
  bedroom,
  bathroom,
  office,
}: InteractiveMapProps) => {
  return (
    <View style={{ position: "relative", height: 235, width: "100%" }}>
      <Image
        source={require("../../../assets/images/plane-1.png")}
        style={[styles.baseImage, MODE_MAIN_STYLE[livingroom]]}
      />
      <Image
        source={require("../../../assets/images/plane-dark-1.png")}
        style={[styles.baseImage, MODE_OVERLAY_STYLE[livingroom]]}
      />

      <Image
        source={require("../../../assets/images/plane-2.png")}
        style={[styles.baseImage, MODE_MAIN_STYLE[bedroom]]}
      />
      <Image
        source={require("../../../assets/images/plane-dark-2.png")}
        style={[styles.baseImage, MODE_OVERLAY_STYLE[bedroom]]}
      />

      <Image
        source={require("../../../assets/images/plane-3.png")}
        style={[styles.baseImage, MODE_MAIN_STYLE[kitchen]]}
      />
      <Image
        source={require("../../../assets/images/plane-dark-3.png")}
        style={[styles.baseImage, MODE_OVERLAY_STYLE[kitchen]]}
      />

      <Image
        source={require("../../../assets/images/plane-4.png")}
        style={[styles.baseImage, MODE_MAIN_STYLE[office]]}
      />
      <Image
        source={require("../../../assets/images/plane-dark-4.png")}
        style={[styles.baseImage, MODE_OVERLAY_STYLE[office]]}
      />

      <Image
        source={require("../../../assets/images/plane-5.png")}
        style={[styles.baseImage, MODE_MAIN_STYLE[bathroom]]}
      />
      <Image
        source={require("../../../assets/images/plane-dark-5.png")}
        style={[styles.baseImage, MODE_OVERLAY_STYLE[bathroom]]}
      />
    </View>
  );
};
