import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-dynamic-vector-icons";
import { COLORS } from "@shared-constants";

interface NotificationProps {
  variant?: "warning" | "alert";
  title: ReactNode;
  titleAction?: ReactNode;
  description?: ReactNode;
  style?: StyleProp<any>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    borderRadius: 12,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  description: {
    marginTop: 9,
  },
});

export const Notification = ({
  variant = "alert",
  title,
  titleAction,
  description,
  ...rest
}: NotificationProps) => {
  return (
    <View {...rest} style={[styles.container, rest.style]}>
      <View style={styles.title}>
        {variant === "alert" && (
          <Icon
            type="Feather"
            name="alert-triangle"
            color={COLORS.FAILURE}
            size={14}
            style={styles.icon}
          />
        )}
        {variant === "warning" && (
          <Icon
            type="Feather"
            name="alert-circle"
            size={14}
            color={COLORS.PRIMARY}
            style={styles.icon}
          />
        )}
        {title}
        <View style={{ flex: 1 }} />
        {titleAction}
      </View>
      {description && <View style={styles.description}>{description}</View>}
    </View>
  );
};
