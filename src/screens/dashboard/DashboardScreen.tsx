/* eslint-disable react-native/no-unused-styles */
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientText from "@shared-components/gradient-text/GradientText";
import { fontStyles } from "shared/styles/fonts";
import { useUser } from "api/useUser";
import { InterText } from "@shared-components/inter-text/InterText";
import { SCREENS } from "@shared-constants";
import { BlockNotification } from "@shared-components/blackout-notification/BlackoutNotification";
import { InsightNotification } from "@shared-components/insight-notification/InsightNotification";
import Icon from "react-native-dynamic-vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { RoomCard } from "@shared-components/room-card/RoomCard";
import { ERoomStatus, Room } from "types/room";
import {
  BUTTON_POSITION_STYLES,
  InteractiveMap,
} from "@shared-components/interactive-map/InteractiveMap";
import { StatusButton } from "@shared-components/status-button/StatusButton";
import { useRooms } from "api/useRooms";
import { arrayUpsert } from "utils/array";

const styles = StyleSheet.create({
  notificationContainer: {
    marginTop: 8,
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

export const DashboardScreen: React.FC<any> = ({ navigation }) => {
  const { user } = useUser();
  const { rooms, mutate } = useRooms();

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
          <View style={{ flexDirection: "row" }}>
            <GradientText
              colors={["#DE6019", "#EC9B60"]}
              style={{ ...fontStyles.h1, marginBottom: 12 }}
            >
              Welcome back, {user!.name}
            </GradientText>
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
          <InterText style={{ ...fontStyles.h3, marginTop: 30 }}>
            Notifications
          </InterText>
          <View style={styles.notificationContainer}>
            <BlockNotification time="20:21" progressText="32/53 KWh gathered" />
            <InsightNotification
              insightText="Your kitchen is consuming a high amount of energy"
              actionButtonContent={
                <Icon type="Feather" name="eye" size={14} color="#fff" />
              }
              style={{ marginTop: 6 }}
            />
          </View>

          {/* ==================== Your Home ==================== */}
          <View style={{ marginTop: 40 }}>
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
          </View>

          {/* ==================== Your Rooms ==================== */}
          <View style={{ marginTop: 32 }}>
            <InterText style={fontStyles.h3}>Your rooms</InterText>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginTop: 16,
              }}
            >
              <RoomCard
                room={rooms[0]}
                style={{ marginRight: 12, marginBottom: 12 }}
                onPress={() =>
                  navigation.push(SCREENS.DETAILS, { roomId: rooms[0].id })
                }
              />
              <RoomCard
                room={rooms[1]}
                style={{ marginRight: 12, marginBottom: 12 }}
                onPress={() =>
                  navigation.push(SCREENS.DETAILS, { roomId: rooms[1].id })
                }
              />
              <RoomCard
                room={rooms[2]}
                style={{ marginRight: 12, marginBottom: 12 }}
                onPress={() =>
                  navigation.push(SCREENS.DETAILS, { roomId: rooms[2].id })
                }
              />
              <RoomCard
                room={rooms[3]}
                style={{ marginRight: 12 }}
                onPress={() =>
                  navigation.push(SCREENS.DETAILS, { roomId: rooms[3].id })
                }
              />
              <RoomCard
                room={rooms[4]}
                onPress={() =>
                  navigation.push(SCREENS.DETAILS, { roomId: rooms[4].id })
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
