import React from "react";
import { Image } from "react-native";

interface AchievementProps {
  id: string;
}

const achievements: any = {
  "1": require("../../../assets/images/achievements/1.png"),
  "2": require("../../../assets/images/achievements/2.png"),
  "3": require("../../../assets/images/achievements/3.png"),
  "4": require("../../../assets/images/achievements/4.png"),
  "5": require("../../../assets/images/achievements/5.png"),
};

export const Achievement = ({ id }: AchievementProps) => {
  console.log(achievements);

  return (
    <Image
      source={achievements[id] as any}
      style={{ width: 50, height: 50, resizeMode: "contain" }}
    />
  );
};
