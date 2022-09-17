/* eslint-disable no-dupe-keys */
import { COLORS } from "@shared-constants";
import { StyleSheet } from "react-native";

export const fontStyles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Inter",
    color: COLORS.TEXT,
  },
  h2: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    fontFamily: "Inter",
    color: COLORS.TEXT,
  },
  h3: {
    fontSize: 12,
    fontWeight: "700",
    color: "#333",
    fontFamily: "Inter",
    color: COLORS.TEXT,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#333",
    fontFamily: "Inter",
    opacity: 0.5,
    color: COLORS.TEXT,
  },
  text: {
    fontFamily: "Inter",
    color: COLORS.TEXT,
  },
});
