import { COLORS } from "@shared-constants";
import React, { useMemo } from "react";
import { StyleProp, StyleSheet, View } from "react-native";
import { Schedule } from "types/room";

interface ScheduleBarProps {
  schedules: Schedule[];
  style?: StyleProp<any>;
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  track: {
    backgroundColor: "#E8E8F3",
    borderRadius: 4,
    height: 8,
    position: "relative",
  },
  thumb: {
    left: 0,
    top: -2,
    bottom: -2,
    right: 0,
    position: "absolute",
    flexDirection: "row",
  },
});

export const ScheduleBar = ({ schedules, ...rest }: ScheduleBarProps) => {
  const thumbStyle = useMemo(
    () => ({
      thumbContent: schedules.map((x) => ({
        flex: Math.round((x.stop - x.start) * 100),
        height: "100%",
        borderRadius: 4,
        backgroundColor: COLORS.PRIMARY,
      })),
      thumbFillerA: schedules.map((x) => ({
        flex: Math.round(x.start * 100),
      })),
      thumbFillerB: schedules.map((x) => ({
        flex: 100 - Math.round(x.stop * 100),
      })),
    }),
    [schedules],
  );

  return (
    <View {...rest} style={[styles.container, rest.style]}>
      <View style={styles.track} />
      {schedules.map((schedule, i) => (
        <View key={schedule.id} style={styles.thumb}>
          <View style={thumbStyle.thumbFillerA[i]} />
          <View style={thumbStyle.thumbContent[i]} />
          <View style={thumbStyle.thumbFillerB[i]} />
        </View>
      ))}
    </View>
  );
};
