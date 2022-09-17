import React, { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, View } from "react-native";
import { COLORS } from "@shared-constants";
import { Notification } from "@shared-components/notification/Notification";
import { InterText } from "@shared-components/inter-text/InterText";

interface InsightNotificationProps {
  insightText: string;
  actionButtonContent: ReactNode;
  style: StyleProp<any>;
}

const styles = StyleSheet.create({
  notificationText: {
    fontWeight: "500",
    fontSize: 10,
    color: "#E1E1E1",
  },
  notificationButton: {
    paddingHorizontal: 8,
    height: 20,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
});

export const InsightNotification = ({
  insightText,
  actionButtonContent,
  style,
}: InsightNotificationProps) => {
  return (
    <Notification
      variant="warning"
      title={
        <View>
          <InterText style={styles.notificationText}>{insightText}</InterText>
        </View>
      }
      titleAction={
        <Pressable
          style={({ pressed }) => ({
            ...styles.notificationButton,
            backgroundColor: pressed ? "#4D4D51" : "#434346",
          })}
        >
          {actionButtonContent}
        </Pressable>
      }
      style={style}
    />
  );
};
