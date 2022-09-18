/* eslint-disable react-native/no-unused-styles */
import React, { useEffect } from "react";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontStyles } from "shared/styles/fonts";
import { useUser } from "api/useUser";
import { InterText } from "@shared-components/inter-text/InterText";
import { SCREENS } from "@shared-constants";
import Icon from "react-native-dynamic-vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { ProgressBar } from "@shared-components/progress-bar/ProgressBar";
import { useRooms } from "api/useRooms";
import { ERoomStatus, Room } from "types/room";
import {
  BUTTON_POSITION_STYLES,
  InteractiveMap,
} from "@shared-components/interactive-map/InteractiveMap";
import { StatusButton } from "@shared-components/status-button/StatusButton";
import { arrayUpsert } from "utils/array";
import { BlackoutNotification } from "@shared-components/blackout-notification/BlackoutNotification";
import Animated, { Layout } from "react-native-reanimated";

const styles = StyleSheet.create({
  notificationContainer: {
    marginTop: 8,
    flexDirection: "column",
  },
});

const buttonStyles = (pressed: boolean) =>
  StyleSheet.create({
    button: {
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: pressed ? "#D3E2E5" : "#DEE9EB",
      borderRadius: 9999,
    },
  });

export const PreventScreen: React.FC<any> = ({ navigation }) => {
  const { user } = useUser();

  const { rooms, mutate } = useRooms();

  const target =
    (10.0 -
      rooms.reduce((p, x) => p + (x.status === ERoomStatus.ON ? 1 : 0), 0)) /
    9.0;

  const toggleRoomMode = (room: Room) => () =>
    mutate(
      (r) =>
        arrayUpsert(r, {
          ...room,
          status:
            room.status === ERoomStatus.ON ? ERoomStatus.IDLE : ERoomStatus.ON,
        })!,
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView bouncesZoom={true} style={{ overflow: "visible" }}>
        <View style={{ padding: 32 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => navigation.navigate(SCREENS.DASHBOARD, "yem")}
              style={{ paddingRight: 12 }}
            >
              <Icon type="Feather" name="arrow-left" color="#333" />
            </Pressable>
            <InterText style={{ ...fontStyles.h2 }}>
              Blackout prevention
            </InterText>
            <View style={{ flex: 1 }} />
            <Pressable
              onPress={() => {
                navigation.navigate(SCREENS.OVERVIEW);
              }}
              style={({ pressed }) => buttonStyles(pressed).button}
            >
              <Icon type="Feather" name="bar-chart-2" size={15} />
            </Pressable>
          </View>

          {/* ==================== NOTIFICATIONS ==================== */}
          <View style={styles.notificationContainer}>
            <InterText style={{ ...fontStyles.h3, marginTop: 30 }}>
              Ammount needed
            </InterText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginRight: 10,
                  flex: 1,
                }}
                progress={target}
              />
              <InterText style={{ ...fontStyles.h3, fontSize: 9 }}>
                {Math.round(target * 53)}/53 KWh gathered
              </InterText>
            </View>
          </View>

          <Animated.View
            layout={Layout.duration(300).springify()}
            style={{ marginTop: 16 }}
          >
            <BlackoutNotification
              navigation={navigation}
              progress={target}
              time="20:21"
              progressText={`${Math.round(target * 53)}/53 KWh gathered`}
            />
          </Animated.View>

          {/* ==================== Your Home ==================== */}
          <Animated.View
            layout={Layout.duration(300).springify()}
            style={{ marginTop: 40 }}
          >
            <InterText style={fontStyles.h2}>Your home</InterText>
            <InterText style={fontStyles.subtitle}>{user!.address}</InterText>

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
              <View style={{ position: "relative" }}>
                <InteractiveMap
                  kitchen={
                    rooms[2].status === ERoomStatus.ON ? "Active" : "Off"
                  }
                  bathroom={
                    rooms[4].status === ERoomStatus.ON ? "Active" : "Off"
                  }
                  bedroom={
                    rooms[1].status === ERoomStatus.ON ? "Active" : "Off"
                  }
                  livingroom={
                    rooms[0].status === ERoomStatus.ON ? "Active" : "Off"
                  }
                  office={rooms[3].status === ERoomStatus.ON ? "Active" : "Off"}
                />
                <StatusButton
                  status={rooms[0].status}
                  style={BUTTON_POSITION_STYLES.livingroom}
                  onPress={toggleRoomMode(rooms[0])}
                />
                <StatusButton
                  status={rooms[1].status}
                  style={BUTTON_POSITION_STYLES.bedroom}
                  onPress={toggleRoomMode(rooms[1])}
                />
                <StatusButton
                  status={rooms[2].status}
                  style={BUTTON_POSITION_STYLES.kitchen}
                  onPress={toggleRoomMode(rooms[2])}
                />
                <StatusButton
                  status={rooms[3].status}
                  style={BUTTON_POSITION_STYLES.office}
                  onPress={toggleRoomMode(rooms[3])}
                />
                <StatusButton
                  status={rooms[4].status}
                  style={BUTTON_POSITION_STYLES.bathroom}
                  onPress={toggleRoomMode(rooms[4])}
                />
              </View>
            </LinearGradient>
          </Animated.View>

          {/* ==================== Your Savings ==================== */}
          <Animated.View
            layout={Layout.duration(300).springify()}
            style={styles.notificationContainer}
          >
            <InterText style={{ ...fontStyles.h3, marginTop: 30 }}>
              Your potential savings
            </InterText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginRight: 10,
                  flex: 1,
                }}
                progress={0.73}
              />
              <InterText style={{ ...fontStyles.h3, fontSize: 10 }}>
                17/23 KWh
              </InterText>
            </View>
          </Animated.View>

          <Animated.View
            layout={Layout.duration(300).springify()}
            style={styles.notificationContainer}
          >
            <InterText
              style={{
                ...fontStyles.h3,
                opacity: 0.5,
                fontSize: 11,
                marginTop: 10,
              }}
            >
              Saving Split
            </InterText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.3}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Kitchen
              </InterText>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.2}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Office
              </InterText>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.2}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Living Room
              </InterText>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.1}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Batchroom
              </InterText>
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
