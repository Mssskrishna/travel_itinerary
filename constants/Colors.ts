/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#3643FB";
const tintColorDark = "#D1F462";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    primaryColor: "#3643FB",

    accomodationColor: "#fff",

    remainingColor: "#fff",
  },
  dark: {
    text: "#ECEDEE",
    background: "#000",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    primaryColor: "#D3F462",
    accomodationColor: "#4D4D4D",

    remainingColor: "#333333",
  },
};
