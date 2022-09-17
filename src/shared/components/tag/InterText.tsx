/* eslint-disable no-nested-ternary */
/* eslint-disable react-native/no-unused-styles */
import React, { useMemo } from "react";
import { StyleSheet, Text, TextProps, View } from "react-native";

type TagColor = "blue" | "green" | "red";
interface TagProps extends TextProps {
  color: TagColor;
  name: string;
}

const styles = (color: TagColor) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      backgroundColor:
        color === "green"
          ? "#70FE33"
          : color === "blue"
          ? "#33D9FE"
          : "#ff7979",
      borderRadius: 999,
    },
    text: {
      fontSize: 11,
      fontWeight: "800",
      color: "#333",
    },
  });
};

export const Tag = ({ color, name, ...rest }: TagProps) => {
  const style = useMemo(() => styles(color), [color]);

  return (
    <View {...rest} style={[rest.style, style.container]}>
      <Text style={style.text}>{name}</Text>
    </View>
  );
};
