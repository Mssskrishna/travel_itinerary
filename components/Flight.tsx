import { View, Text, Image } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";

const Flight = () => {
  return (
    <ThemedView
      style={{
        backgroundColor: "#313DDF",
        margin: 5,
        marginTop: 15,
        borderRadius: 10,
        padding: 5,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ThemedText
          style={{ color: "#fff", fontSize: 20, marginHorizontal: 10 }}
        >
          Flight Details
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 13,
            color: "#D3F462",
            paddingRight: 10,
            textDecorationLine: "underline",
          }}
        >
          See all
        </ThemedText>
      </View>
      <ThemedText
        style={{ color: "white", fontWeight: "600", marginHorizontal: 10 }}
      >
        26.01.2025 , 10:50 AM
      </ThemedText>

      <View style={{ flexDirection: "row", gap: 10, margin: 10 }}>
        <View>
          <ThemedText style={{ color: "white" }}>DEL </ThemedText>
          <ThemedText style={{ color: "white", fontWeight: "600" }}>
            Delhi, India{" "}
          </ThemedText>
        </View>
        <Ionicons name="arrow-redo" size={30} color={"#fff"} />
        <View>
          <ThemedText style={{ color: "white" }}>NRT</ThemedText>
          <ThemedText style={{ color: "white", fontWeight: "600" }}>
            Narita, Tokyo
          </ThemedText>
        </View>
      </View>
      <Image
        source={require("@/assets/images/Plane.png")}
        style={{
          position: "absolute",
          width: 200,
          height: 100,
          alignSelf: "flex-end",
        }}
      />
    </ThemedView>
  );
};

export default Flight;
