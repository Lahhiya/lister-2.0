import { Button, Switch, Text, View } from "react-native";
import useSetting from "@/store/useSettingStore";

export default function SettingConfig(){
      const { showDummy, toggleShowDummy } = useSetting();
      const { autoBackup, toggleAutoBackup } = useSetting();
      const { reminder, toggleReminder } = useSetting();
    return (
      <View className="bg-white flex-col item rounded-lg p-4 w-[90%]">
        <View className="flex-row">
          <Text>Settings</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text> Display Dummy Data : </Text>
          <Switch value={showDummy} onValueChange={toggleShowDummy} />
        </View>
        <View className="flex-row justify-between items-center">
          <Text> Auto Backup : </Text>
          <Switch value={autoBackup} onValueChange={toggleAutoBackup} />
        </View>
        <View className="flex-row justify-between items-center">
          <Text> Reminder : </Text>
          <Switch value={reminder} onValueChange={toggleReminder} />
        </View>
        <View>
          <Button title="Simpan"></Button>
        </View>
      </View>
    );
}