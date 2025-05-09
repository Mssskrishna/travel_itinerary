import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Flight from "@/components/Flight";
import Hotels from "@/components/Hotels";
import Activities from "@/components/Activities";
import ActvityList from "@/components/ActvityList";
import MainImages from "@/components/MainImages";
import Profile from "@/components/Profile";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const activeColor = Colors[colorScheme ?? "light"].primaryColor;
  const accomodationColor = Colors[colorScheme ?? "light"].accomodationColor;
  const remainingColor = Colors[colorScheme ?? "light"].remainingColor;
  return (
    <ScrollView style={{ flex: 1, marginTop: 30, marginLeft: 5 }}>
      <ThemedView
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ThemedView style={{}}>
          <ThemedText style={{ fontSize: 30, fontWeight: 500 }}>
            Hello Chavi!
          </ThemedText>
          <ThemedText style={{ fontSize: 25, fontWeight: 500 }}>
            Ready for the Trip!
          </ThemedText>
        </ThemedView>
        <Profile />
      </ThemedView>
      <ThemedView style={{ marginTop: 15 }}>
        <ThemedText style={{ fontSize: 20, fontWeight: 900 }}>
          Your Upcoming Trip!
        </ThemedText>
        <MainImages activeColor={activeColor} />
        <Flight />
        <Hotels
          accomodationColor={accomodationColor}
          activeColor={activeColor}
        />
        <Activities remainingColor={remainingColor} />
        <ActvityList
          remainingColor={remainingColor}
          activeColor={activeColor}
        />
      </ThemedView>
    </ScrollView>
  );
}
