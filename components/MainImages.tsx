import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

interface MainImagesProps {
  activeColor: string;
}
interface MainImagesProps {
  icon: keyof typeof Ionicons.glyphMap;
  activeColor: string;
  above: string;
  below: string;
}

const Container = ({ icon, activeColor, above, below }: MainImagesProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Ionicons name={icon} size={30} color={activeColor} />
      <View>
        <ThemedText style={{ color: "white" }}>{above}</ThemedText>
        <Text style={{ color: "white", fontFamily: "Montserrat" }}>
          {below}
        </Text>
      </View>
    </View>
  );
};

const MainImages = ({ activeColor }: MainImagesProps) => {
  return (
    <View>
      <Image
        source={require("@/assets/images/image.png")}
        style={styles.image}
      />
      <ThemedText style={styles.title} type="title">
        TOKYO
      </ThemedText>
      <ThemedText style={styles.subtitle}>27.01.2025 - 02.02.2025</ThemedText>
      <BlurView style={styles.blurContainer} intensity={90} tint="dark">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Container
            icon="alarm"
            activeColor={activeColor}
            above="8 Days"
            below="Duration"
          />

          <Container
            icon="people"
            activeColor={activeColor}
            above="4(2M,2F)"
            below="Group Size"
          />
          <Container
            icon="save"
            activeColor={activeColor}
            above="14"
            below="Activities"
          />
        </View>
      </BlurView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: { width: "97%", height: 350, borderRadius: 20, marginTop: 15 },
  title: {
    position: "absolute",
    top: 40,
    fontSize: 60,
    fontWeight: "bold",
    lineHeight: 50,
    left: 20,
  },
  subtitle: {
    position: "absolute",
    top: 80,
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 40,
    left: 25,
  },
  blurContainer: {
    marginTop: -75,
    backgroundColor: "tranparent",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    width: "97%",
  },
});
export default MainImages;
