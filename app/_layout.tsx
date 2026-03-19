import "../global.css"; 
import { Stack } from "expo-router";
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider';

export default function RootLayout() {
    return (
    <GluestackUIProvider mode="dark">
      <Stack screenOptions={{ headerShown: false}}>
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
    </GluestackUIProvider>
    );
}