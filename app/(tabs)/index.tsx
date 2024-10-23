import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, StyleSheet, TextInput } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText>Pantalla de inicio</ThemedText>
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button}>
        <ThemedText>Iniciar sesión</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  input: {
    borderColor: "#e4e4e4",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  button: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#61dbfb",
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
