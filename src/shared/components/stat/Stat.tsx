import GradientText from "@shared-components/gradient-text/GradientText";
import { COLORS } from "@shared-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StatProps {
  stat: string;
  top: string;
  bottom: string;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter",
    color: COLORS.TEXT,
    opacity: 0.5,
  },
});

export const Stat = ({ stat, top, bottom, ...rest }: StatProps) => {
  return (
    <View>
      <Text style={styles.text}>{top}</Text>
      <GradientText
        colors={["#DE6019", "#EC9B60"]}
        style={{ fontSize: 20, fontWeight: "700", marginVertical: 4 }}
      >
        {stat}
      </GradientText>
      <Text style={styles.text}>{bottom}</Text>
    </View>
  );
};
