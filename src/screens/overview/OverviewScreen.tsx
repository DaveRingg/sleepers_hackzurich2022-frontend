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
import { Stat } from "@shared-components/stat/Stat";
import { Achievement } from "@shared-components/achievement/Achievement";

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
  activityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  activityText: {
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.TEXT,
    marginRight: 12,
  },
  activityLine: {
    flex: 1,
    height: 2,
    borderRadius: 122,
    backgroundColor: "#E5E5F0",
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
          {/* ==================== Your overview ==================== */}
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

            <InterText style={{ ...fontStyles.h3, marginTop: 26 }}>
              Your energy consumption this year
            </InterText>

            <Image
              source={require("../../assets/images/chart-2.png")}
              style={{ width: "100%", height: 100, marginTop: 12 }}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              marginTop: 32,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Stat top="You helped save" stat="89kWh" bottom="this year" />
            <Stat top="You reclaimed" stat="154 CHF" bottom="since January" />
            <Stat top="You offset" stat="3 KG" bottom="of CO₂" />
          </View>

          <View>
            <InterText
              style={{ ...fontStyles.h3, marginTop: 48, marginBottom: 16 }}
            >
              If you keep going like this{" "}
            </InterText>

            <View style={styles.activityContainer}>
              <InterText style={styles.activityText}>
                You’ll prevent 3 more blackouts
              </InterText>
              <View style={styles.activityLine} />
            </View>
            <View style={styles.activityContainer}>
              <InterText style={styles.activityText}>
                You’ll save 1300kW more
              </InterText>
              <View style={styles.activityLine} />
            </View>
            <View style={styles.activityContainer}>
              <InterText style={styles.activityText}>
                You’ll offset 2.8 more kg of CO₂
              </InterText>
              <View style={styles.activityLine} />
            </View>
          </View>

          <View style={{ marginTop: 48 }}>
            <InterText style={fontStyles.h3}>Your achievements</InterText>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 12 }}
            >
              <Achievement id="1" />
              <Achievement id="2" />
              <Achievement id="3" />
              <Achievement id="4" />
              <Achievement id="5" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
