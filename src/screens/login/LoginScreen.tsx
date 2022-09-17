import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientText from "@shared-components/gradient-text/GradientText";
import { fontStyles } from "shared/styles/fonts";
import { COLORS } from "@shared-constants";
import { InterText } from "@shared-components/inter-text/InterText";

export const LoginScreen: React.FC = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState<string | undefined>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }} />
      <View style={{ padding: 32 }}>
        <Image
          source={require("../../assets/images/power-plant.png")}
          style={{ height: 120, width: 120, marginBottom: 38 }}
        />
        <View style={{ flexDirection: "row" }}>
          <GradientText
            colors={["#DE6019", "#EC9B60"]}
            style={{ ...fontStyles.h1, marginBottom: 12 }}
          >
            Welcome to XYZ
          </GradientText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 24,
            backgroundColor: "#E8E8F3",
            borderRadius: 12,
          }}
        >
          <Icon type="Feather" name="user" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            textContentType="username"
            placeholder="Username"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 24,
            backgroundColor: "#E8E8F3",
            borderRadius: 12,
            marginTop: 9,
          }}
        >
          <Icon type="Feather" name="key" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            textContentType="password"
            placeholder="Password"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginTop: 12,
          }}
        >
          <Pressable
            style={({ pressed }) => ({
              paddingHorizontal: 24,
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: pressed ? COLORS.PRIMARY_ACTIVE : COLORS.PRIMARY,
              borderRadius: 12,
            })}
          >
            <InterText style={{ fontWeight: "700" }}>Login</InterText>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <Image
        source={require("../../assets/images/logo-illustration.png")}
        style={{ width: "100%", height: 200, bottom: 0 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 46,
    color: "#8D8D93",
    width: "100%",
    fontSize: 12,
    fontFamily: "Inter",
  },
});
