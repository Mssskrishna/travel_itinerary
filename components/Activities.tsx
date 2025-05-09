import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { JSX } from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ActivitiesProps {
  remainingColor: string;
}

const Activities = ({ remainingColor }: ActivitiesProps): JSX.Element => {
  const colorScheme = useColorScheme();
  const activeColor = Colors[colorScheme ?? "light"].primaryColor;
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
          Activites
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
      <ThemedView
        style={{
          margin: 10,
          backgroundColor: remainingColor,
          borderRadius: 10,
          borderColor: "#3333334D",
          borderWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, margin: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: activeColor,
              padding: 6,
              borderRadius: 10,
            }}
          >
            <ThemedText style={{ color: "black" }}>Day Plan</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 6,
              borderColor: activeColor,
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <ThemedText style={{ color: activeColor }}>Activites</ThemedText>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={[
            { date: 27, month: "JAN", day: "TUE" },
            { date: 28, day: "WED" },
            { date: 29, day: "THU" },
            { date: 30, day: "FRI" },
            { date: 31, day: "SAT" },
            { date: 1, month: "FEB", day: "SUN" },
          ]}
          renderItem={({ item }) => (
            <View>
              {item.month ? (
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    borderRadius: 10,
                    borderColor: activeColor,
                    borderWidth: 1,
                    margin: 5,
                    marginLeft: 10,
                  }}
                >
                  <ThemedText
                    style={{
                      transform: [{ rotate: "270deg" }],
                      padding: 8,
                      backgroundColor: activeColor,
                      color: "white",
                      height: "100%",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      flex: 1,
                    }}
                  >
                    {item.month}
                  </ThemedText>
                  <View
                    style={{
                      marginHorizontal: 10,
                      backgroundColor: "#292929",
                      paddingHorizontal: 10,
                      marginLeft: -10,
                    }}
                  >
                    <ThemedText>{item.day}</ThemedText>
                    <ThemedText style={{ textAlign: "center" }}>
                      {item.date}
                    </ThemedText>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    margin: 5,
                    backgroundColor: "#292929",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    opacity: 0.5,
                  }}
                >
                  <ThemedText>{item.day}</ThemedText>
                  <ThemedText style={{ textAlign: "center" }}>
                    {item.date}
                  </ThemedText>
                </View>
              )}
            </View>
          )}
        />
      </ThemedView>
    </View>
  );
};

export default Activities;
