import "../../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(main)" />
        <Stack.Screen
          name="modalForm"
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="modalSearch"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    );
}