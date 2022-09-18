import { COLORS } from "@shared-constants";
import React, { useEffect, useMemo } from "react";
import { StyleProp, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface ProgressBarProps {
  progress: number;
  mode: "light" | "dark";
  style: StyleProp<any>;
}

const darkStyles = StyleSheet.create({
  track: {
    backgroundColor: "#FFFFFF",
    opacity: 0.2,
    borderRadius: 99,
    height: 4,
    position: "relative",
  },
});

const lightStyles = StyleSheet.create({
  track: {
    backgroundColor: "#000",
    opacity: 0.2,
    borderRadius: 99,
    height: 4,
    position: "relative",
  },
});

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  thumb: {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
  },
});

export const ProgressBar = ({ progress, mode, ...rest }: ProgressBarProps) => {
  const v = useSharedValue(0);

  useEffect(() => {
    v.value = progress;
  }, [progress, v]);

  const animStyle = useAnimatedStyle(() => {
    return {
      flex: withSpring(100 - Math.round(v.value * 100)),
    };
  });

  const thumbStyle = useMemo(
    () => ({
      thumbContent: {
        flex: Math.round(progress * 100),
        height: "100%",
        borderRadius: 9999,
        backgroundColor: COLORS.PRIMARY_ACTIVE,
      },
    }),
    [progress],
  );

  return (
    <View {...rest} style={[styles.container, rest.style]}>
      <View style={mode === "dark" ? darkStyles.track : lightStyles.track} />
      <View style={styles.thumb}>
        <View style={thumbStyle.thumbContent} />
        <Animated.View style={animStyle} />
      </View>
    </View>
  );
};
