/* eslint-disable react-native/no-unused-styles */
import React, { useCallback, useMemo } from "react";
import { Button, Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontStyles } from "shared/styles/fonts";
import { useUser } from "api/useUser";
import { InterText } from "@shared-components/inter-text/InterText";
import Icon from "react-native-dynamic-vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { ERoomStatus } from "types/room";
import { ROOMS } from "shared/constants/rooms";
import { COLORS, SCREENS } from "@shared-constants";
import { Tag } from "@shared-components/tag/InterText";
import { ScheduleBar } from "@shared-components/schedule-bar/ScheduleBar";
import { useRefresh } from "hooks/use-refresh";

const buttonStyles = (pressed: boolean) =>
  StyleSheet.create({
    button: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: pressed ? "#D3E2E5" : "#DEE9EB",
      borderRadius: 9999,
    },
  });

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 11,
    fontWeight: "700",
    color: COLORS.TEXT,
  },
  scheduleAnnotation: {
    fontSize: 10,
    fontWeight: "500",
    color: "#B9B9B9",
  },
});

export const OverviewScreen: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{ overflow: "visible" }}>
        <View style={{ padding: 32 }}>
          {/* ==================== Your room ==================== */}
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                onPress={() => navigation.navigate(SCREENS.DASHBOARD)}
                style={{ paddingRight: 12 }}
              >
                <Icon type="Feather" name="arrow-left" color="#333" />
              </Pressable>
              <InterText style={fontStyles.h2}>Your overview</InterText>
            </View>
            <InterText style={fontStyles.subtitle}>
              30 kWh per day overall consumption
            </InterText>

            <InterText style={fontStyles.h3}>
              Your energy consumption this year
            </InterText>

            <LinearGradient
              colors={["#E6E7F2", "#EBECF8"]}
              useAngle={true}
              angle={140}
              style={{
                marginTop: 24,
                marginHorizontal: -16,
                paddingHorizontal: 16,
                paddingVertical: 32,
                borderRadius: 13,
              }}
            >
              <Image
                source={require("../../assets/images/home-full.png")}
                style={{ width: "100%", height: 235, bottom: 0 }}
                resizeMode="contain"
              />
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
