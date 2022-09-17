/* eslint-disable no-nested-ternary */
/* eslint-disable react-native/no-unused-styles */
import { InterText } from "@shared-components/inter-text/InterText";
import React, { useMemo } from "react";
import { Pressable, StyleSheet, Text, TextProps, View } from "react-native";
import { ERoomStatus } from "types/room";
import { capitalizeFirstLetter } from "utils";

interface TagProps extends TextProps {
  status: ERoomStatus;
}

const buttonStyles = (pressed: boolean, status: ERoomStatus) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      backgroundColor:
        status === ERoomStatus.ON
          ? "#70FE33"
          : ERoomStatus.IDLE
          ? "#33D9FE"
          : "#ff7979",
      borderRadius: 999,
      shadowColor: "#000",
      shadowOpacity: 0.54,
      shadowRadius: 21,
      shadowOffset: {
        height: 4,
        width: 0,
      },
    },
  });
};

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    fontWeight: "800",
    color: "#333",
  },
});

export const StatusButton = ({ status, ...rest }: TagProps) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        rest.style,
        buttonStyles(pressed, status).container,
      ]}
    >
      <InterText style={styles.text}>{capitalizeFirstLetter(status)}</InterText>
    </Pressable>
  );
};
