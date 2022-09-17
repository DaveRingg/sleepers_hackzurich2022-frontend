/* eslint-disable react-native/no-unused-styles */
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientText from "@shared-components/gradient-text/GradientText";
import { fontStyles } from "shared/styles/fonts";
import { useUser } from "api/useUser";
import { InterText } from "@shared-components/inter-text/InterText";
import { SCREENS } from "@shared-constants";
import Icon from "react-native-dynamic-vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { ProgressBar } from "@shared-components/progress-bar/ProgressBar";

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

export const PreventScreen: React.FC<any> = ({ navigation }) => {
  const { user } = useUser();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView bouncesZoom={true} style={{ overflow: "visible" }}>
        <View style={{ padding: 32 }}>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => navigation.navigate(SCREENS.DASHBOARD)}
              style={{ paddingRight: 12 }}
            >
              <Icon type="Feather" name="arrow-left" color="#333" />
            </Pressable>
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
          <View style={styles.notificationContainer}>
            <InterText style={{ ...fontStyles.h3, marginTop: 30 }}>
              Ammount needed
            </InterText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginTop: 10,
                  marginRight: 10,
                  flex: 1,
                }}
                progress={0.6}
              />
              <InterText style={{ ...fontStyles.h3 }}>
                32/53 KWh gathered
              </InterText>
            </View>
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
              <Image
                source={require("../../assets/images/home-full.png")}
                style={{ width: "100%", height: 235, bottom: 0 }}
                resizeMode="contain"
              />
            </LinearGradient>
          </View>

          {/* ==================== Your Savings ==================== */}
          <View style={styles.notificationContainer}>
            <InterText style={{ ...fontStyles.h3, marginTop: 30 }}>
              Your potential savings
            </InterText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  marginTop: 10,
                  marginRight: 10,
                  flex: 1,
                }}
                progress={0.73}
              />
              <InterText style={{ ...fontStyles.h3 }}>17/23 KWh</InterText>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <InterText style={{ ...fontStyles.h3, marginTop: 10 }}>
              Saving Split
            </InterText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  margin: 10,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.3}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Kitchen
              </InterText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  margin: 10,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.2}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Office
              </InterText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  margin: 10,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.2}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Living Room
              </InterText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ProgressBar
                mode="light"
                style={{
                  ...fontStyles.h3,
                  margin: 10,
                  marginRight: 10,
                  flex: 2,
                }}
                progress={0.1}
              />
              <InterText style={{ ...fontStyles.h3, flex: 1 }}>
                Batchroom
              </InterText>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
