import { View, Text, FlatList, Image } from "react-native";
import React, { JSX } from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { AntDesign, Entypo } from "@expo/vector-icons";

const images = {
  place1: require("@/assets/images/place1.png"),
  place2: require("@/assets/images/place2.png"),
  place3: require("@/assets/images/place3.png"),
  place4: require("@/assets/images/place4.png"),
  place5: require("@/assets/images/place5.png"),
};

interface HotelsProps {
  accomodationColor: string;
  activeColor: string;
}

const Hotels = ({
  accomodationColor,
  activeColor,
}: HotelsProps): JSX.Element => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <ThemedText style={{ fontSize: 20, marginHorizontal: 10 }}>
          Accomodation
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 13,
            color: activeColor,
            paddingRight: 10,
            textDecorationLine: "underline",
          }}
        >
          See all
        </ThemedText>
      </View>
      <FlatList
        horizontal
        data={[
          {
            imageKey: "place1",
            name: "Shingawa Price Hotel",
            checkin: "26.01.2025, 11:15PM",
            checkout: "27.01.2025, 11:15PM",
            nights: 2,
            status: "confirmed",
          },
          {
            imageKey: "place2",
            name: "Mercury Tokyo Hotel",
            checkin: "26.01.2025, 11:15PM",
            checkout: "27.01.2025, 11:15PM",
            nights: 2,
            status: "rejected",
          },
        ]}
        renderItem={({ item }) => (
          <View
            style={{
              borderColor: "#3333334D",
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <Image
              source={images[item.imageKey]}
              style={{
                width: 240,
                height: 170,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <ThemedView
              style={{
                backgroundColor: accomodationColor,
                width: 240,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                padding: 5,
              }}
            >
              <ThemedText type="subtitle">{item.name}</ThemedText>
              <ThemedText style={{ fontSize: 15, marginTop: 5 }}>
                Checkin : {item.checkin}
              </ThemedText>
              <ThemedText style={{ fontSize: 15 }}>
                Checkout : {item.checkout}
              </ThemedText>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ThemedText>{item.nights} nights</ThemedText>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.status === "confirmed" ? (
                    <>
                      <AntDesign
                        name="checkcircleo"
                        size={20}
                        color={"#90EB61"}
                        style={{ marginRight: 10 }} // ✅ add space after icon
                      />
                      <ThemedText style={{ color: "#90EB61" }}>
                        Confirmed
                      </ThemedText>
                    </>
                  ) : (
                    <>
                      <Entypo
                        name="back-in-time"
                        size={20}
                        color={"#FF6525"}
                        style={{ marginRight: 10 }} // ✅ add space after icon
                      />
                      <ThemedText style={{ color: "#FF6525" }}>
                        Pending
                      </ThemedText>
                    </>
                  )}
                </View>
              </View>
            </ThemedView>
          </View>
        )}
        contentContainerStyle={{ padding: 10, paddingBottom: 10 }}
        ItemSeparatorComponent={() => <View style={{ width: 25 }} />}
      />
    </View>
  );
};

export default Hotels;
