import React, { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { COLORS, SCREENS } from "@shared-constants";
import { Notification } from "@shared-components/notification/Notification";
import { InterText } from "@shared-components/inter-text/InterText";
import { ProgressBar } from "@shared-components/progress-bar/ProgressBar";
import Animated, {
  FadeOutRight,
  FadeOut,
  FadeInLeft,
} from "react-native-reanimated";

interface BlackoutNotificationProps {
  time: string;
  progressText: string;
  progress: number;
  navigation: any;
}

const styles = StyleSheet.create({
  notificationText: {
    fontWeight: "500",
    fontSize: 10,
    color: "#E1E1E1",
  },
  notificationTextHighlight: {
    color: COLORS.FAILURE,
    fontWeight: "700",
  },
  notificationButton: {
    paddingHorizontal: 8,
    height: 20,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  notificationButtonText: {
    fontSize: 10,
    fontWeight: "700",
    color: COLORS.TEXT,
  },
  notificationDescriptionText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#fff",
  },
  notificationPBText: {
    fontSize: 9,
    fontWeight: "500",
    color: "#fff",
  },
  progressBar: {
    flex: 1,
    marginRight: 12,
  },
});

export const BlackoutNotification = ({
  time,
  progressText,
  progress,
  navigation,
}: BlackoutNotificationProps) => {
  return (
    <Notification
      variant={progress < 1.0 ? "alert" : "celebration"}
      title={
        progress < 1.0 ? (
          <Animated.View
            key={"less"}
            exiting={FadeOutRight.duration(400)}
            entering={FadeInLeft.duration(400)}
          >
            <InterText style={styles.notificationText}>
              Possible{" "}
              <InterText style={styles.notificationTextHighlight}>
                blackout
              </InterText>{" "}
              at{" "}
              <InterText style={styles.notificationTextHighlight}>
                {time}
              </InterText>
            </InterText>
          </Animated.View>
        ) : (
          <Animated.View
            key="more"
            entering={FadeInLeft.duration(400)}
            exiting={FadeOutRight.duration(400)}
            style={{ paddingRight: 18 }}
          >
            <InterText style={styles.notificationText}>
              Thank you!{" "}
              <InterText style={{ fontWeight: "900", color: COLORS.PRIMARY }}>
                You
              </InterText>{" "}
              helped us take a big step towards preventing the comming blackout!
            </InterText>
          </Animated.View>
        )
      }
      titleAction={
        progress < 1.0 && (
          <Animated.View exiting={FadeOut}>
            <Pressable
              onPress={() => navigation.navigate(SCREENS.PREVENT)}
              style={({ pressed }) => ({
                ...styles.notificationButton,
                backgroundColor: pressed
                  ? COLORS.PRIMARY_ACTIVE
                  : COLORS.PRIMARY,
              })}
            >
              <InterText style={styles.notificationButtonText}>
                Help prevent
              </InterText>
            </Pressable>
          </Animated.View>
        )
      }
      description={
        progress < 1.0 && (
          <Animated.View
            exiting={FadeOutRight}
            entering={FadeInLeft.duration(400).delay(200)}
          >
            <InterText style={styles.notificationDescriptionText}>
              We need your help! Put any non-critical rooms to idle so we can
              reroute that energy to critical facilities. Saving 53 KWh could
              prevent the blackout
            </InterText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <ProgressBar
                progress={progress}
                mode="dark"
                style={styles.progressBar}
              />
              <InterText style={styles.notificationPBText}>
                {progressText}
              </InterText>
            </View>
          </Animated.View>
        )
      }
    />
  );
};
