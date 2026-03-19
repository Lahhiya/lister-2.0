import SettingConfig from "@/components/Setting/setting.config";
import SettingUtility from "@/components/Setting/setting.utility";
import { View } from "react-native";

export default function SettingTab() {
  return (
    <View className="h-full flex-col justify-evenly gap-5 py-10 items-center">
      <SettingConfig />
      <SettingUtility />
    </View>
  );
}
