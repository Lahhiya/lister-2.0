import { Tabs } from "expo-router";
import { House, History, Settings } from "lucide-react-native";

export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen options={{ 
        title: "Home", 
        tabBarIcon: ({ focused }) => <House size={24} color={focused ? "#3B82F6" : "black"} /> 
        }} name="index" />

      <Tabs.Screen options={{ 
        title: "History", 
        tabBarIcon: ({ focused }) => <History size={24} color={focused ? "#3B82F6" : "black"} /> 
        }} name="history" />

      <Tabs.Screen options={{ 
        title: "Setting", 
        tabBarIcon: ({ focused }) => <Settings size={24} color={focused ? "#3B82F6" : "black"} /> 
        }} name="setting" />

      <Tabs.Screen
        name="detail/[id]"
        options={{
          href: null,
          title: "Detail",
        }}
      />
    </Tabs>
  );
}
