import React from "react";
import {
  Image,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
} from "react-native";
import { COLORS } from "@shared-constants";
import { Room } from "types/room";
import { InterText } from "@shared-components/inter-text/InterText";

interface RoomCardProps extends PressableProps {
  room: Room;
  style?: StyleProp<any>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDEEF7",
    color: "#fff",
    flex: 1,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  containerPressed: {
    backgroundColor: "#e9eaf5",
    color: "#fff",
    flex: 1,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  title: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
  subtitle: {
    fontSize: 9,
    fontWeight: "500",
    color: COLORS.TEXT,
    opacity: 0.5,
    marginTop: 3,
  },
});

export const RoomCard = ({ room, style, ...rest }: RoomCardProps) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        pressed ? styles.containerPressed : styles.container,
        style,
      ]}
    >
      <Image
        source={require("../../../assets/images/kitchen.png")}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
      <InterText
        style={
          room.schedules && room.schedules.length > 0
            ? [styles.title]
            : [styles.title, { marginTop: 20 }]
        }
      >
        {room.name}
      </InterText>
      {room.schedules && room.schedules.length > 0 && (
        <InterText style={styles.subtitle}>Scheduled</InterText>
      )}
    </Pressable>
  );
};
