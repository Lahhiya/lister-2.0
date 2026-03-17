import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen options={{ title: "Home" }} name="index" />
      <Tabs.Screen options={{ title: "list" }} name="list" />
      <Tabs.Screen options={{ title: "Setting" }} name="setting" />
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
