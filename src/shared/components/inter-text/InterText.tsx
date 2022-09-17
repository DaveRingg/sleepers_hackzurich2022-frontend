import React from "react";
import { Text, TextProps } from "react-native";

interface InterTextProps extends TextProps {}

export const InterText = ({ ...rest }: InterTextProps) => {
  return <Text {...rest} style={[rest.style, { fontFamily: "Inter" }]} />;
};
