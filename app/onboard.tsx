import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function onboard() {
  const [name, setName] = useState("");
  const [button, setButton] = useState("");
  const theme = useColorScheme();
  const activeColor = theme === "light" ? "#fff" : "#292929";
  const placeHolderColor = theme === "light" ? "#333333" : "#fff";
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.inside}>
        <ThemedText style={{ fontSize: 23, lineHeight: 30 }}>
          Plan your Journey, Your Way !
        </ThemedText>
        <ThemedText style={{ fontSize: 13 }}>
          Let's create your personalized travel experience
        </ThemedText>
        <ThemedText style={{ marginTop: 30, fontSize: 20 }}>
          Where would you like to go?
        </ThemedText>
        <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="search-outline"
            size={20}
            color={placeHolderColor}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { backgroundColor: activeColor }]}
            placeholder="Enter Destination"
            placeholderTextColor={placeHolderColor}
            value={name}
            onChangeText={setName}
          />
        </ThemedView>

        <ThemedText style={{ marginTop: 30, width: "100%", fontSize: 20 }}>
          How long will you stay
        </ThemedText>
        <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="calendar"
            size={20}
            color={placeHolderColor}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { backgroundColor: activeColor }]}
            placeholder="Select Duration"
            placeholderTextColor={placeHolderColor}
            value={name}

            // onChangeText={setName}
          />
          <Ionicons
            name="arrow-down"
            size={20}
            color="#333333"
            style={styles.icon2}
          />
        </ThemedView>
        <ThemedText style={{ marginTop: 30, width: "100%", fontSize: 20 }}>
          Who are you travelling with?
        </ThemedText>
        <FlatList
          data={[
            { icon: "human-male", item: "solo" },
            { icon: "human-male-male", item: "friends" },
            { icon: "human-male-female-child", item: "family" },
            { icon: "human-male-female", item: "couple" },
          ]}
          numColumns={2}
          style={{ gap: 10 }}
          renderItem={({ item }) => (
            <ThemedView style={{ flex: 1 }}>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    button === item.item ? "#33333333" : "#33333322",
                  padding: 20,
                  margin: 10,
                  flexDirection: "row",
                  borderRadius: 10,
                  gap: 10,
                  justifyContent: "center",
                }}
                onPress={() => {
                  setButton(item.item);
                }}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={24}
                  color={placeHolderColor}
                />
                <ThemedText style={{ fontSize: 17 }}>{item.item}</ThemedText>
              </TouchableOpacity>
            </ThemedView>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
          style={{
            padding: 15,
            margin: 20,
            marginBottom: 50,
            backgroundColor: "#3643FB",
            borderRadius: 10,
          }}
        >
          <ThemedText
            lightColor="#fff"
            style={{ fontWeight: "bold", textAlign: "center", fontSize: 18 }}
            onPress={() => router.replace("/(tabs)")}
          >
            Continue
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  input: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 6,
    borderColor: "#333333",
    borderWidth: 1,
    backgroundColor: "#fff",
    color: "#fff",
    flex: 1,
    paddingLeft: 40,
    fontFamily: "Montserrat",
  },
  inside: {
    flex: 1,
    paddingHorizontal: 12,
  },
  icon: {
    position: "absolute",
    zIndex: 1000,
    marginLeft: 10,
    marginRight: 5,
  },
  icon2: {
    position: "absolute",
    zIndex: 1000,
    left: "90%",
    marginLeft: 10,
    marginRight: 5,
  },
});
