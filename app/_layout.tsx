import "./gesture-handler";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./(tabs)";
import TabTwoScreen from "./(tabs)/explore";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator screenOptions={{ headerTitle: "Mi aplicación" }}>
        <Drawer.Screen
          component={HomeScreen}
          name="(tabs)/index"
          options={{ title: "Inicio" }}
        />
        <Drawer.Screen
          component={TabTwoScreen}
          name="(tabs)/explore"
          options={{ title: "Explorar" }}
        />
      </Drawer.Navigator>
    </ThemeProvider>
  );
}
