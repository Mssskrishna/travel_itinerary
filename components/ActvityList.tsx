import { View, Text, FlatList, Image } from "react-native";
import React, { JSX } from "react";
import { ThemedText } from "./ThemedText";

const images = {
  place1: require("@/assets/images/place1.png"),
  place2: require("@/assets/images/place2.png"),
  place3: require("@/assets/images/place3.png"),
  place4: require("@/assets/images/place4.png"),
  place5: require("@/assets/images/place5.png"),
};

interface HotelsProps {
  remainingColor: string;
  activeColor: string;
}

const ActvityList = ({
  remainingColor,
  activeColor,
}: HotelsProps): JSX.Element => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingBottom: 10,
        }}
      >
        <ThemedText
          style={{
            fontSize: 15,
            marginHorizontal: 10,
            borderWidth: 1,
            backgroundColor: activeColor,
            color: "black",
            paddingHorizontal: 2,
            borderRadius: 10,
          }}
        >
          Day 1 27.01.2025
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 13,
            color: activeColor,
            paddingRight: 10,
            textDecorationLine: "underline",
          }}
        >
          3 Activites
        </ThemedText>
      </View>
      <FlatList
        data={[
          {
            imageKey: "place3",
            place: "Senso-ji Temple & Nokamise Shopping Street Senso-ji",
            timing: "8.15 am Morning",
            duration: "3 hours",
            pickup: "from hostel",
          },
          {
            imageKey: "place4",
            place: "Tokyo Sky Treee",
            timing: "1.00 pm Afternoon",
            duration: "3 hours",
            pickup: "from nakamise street",
          },
          {
            imageKey: "place5",
            place: "Kimano Wearing",
            timing: "Any time before 8.00pm",
            duration: "1-2 hours",
            pickup: "from hotel",
          },
        ]}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 10,
              marginBottom: 5,
              flexDirection: "row",
              backgroundColor: remainingColor,
              borderRadius: 10,
              gap: 5,
              borderColor: "#3333334D",
              borderWidth: 1,
            }}
          >
            <Image
              source={images[item.imageKey]}
              style={{
                width: 150,
                height: 150,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
            <View style={{ flex: 1, flexShrink: 1 }}>
              <ThemedText style={{ fontSize: 15 }}>{item.place}</ThemedText>
              <View>
                <ThemedText style={{ fontSize: 13 }}>
                  Timing: {item.timing}
                </ThemedText>
                <ThemedText style={{ fontSize: 14 }}>
                  Duration: {item.duration}
                </ThemedText>
                <ThemedText style={{ fontSize: 14 }}>
                  Pickup: {item.pickup}
                </ThemedText>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ActvityList;
