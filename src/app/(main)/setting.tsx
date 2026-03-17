import useSetting from "@/store/useSettingStore";
import { Button, Switch, Text, View } from "react-native";

export default function SettingTab() {
  const { showDummy, toggleShowDummy } = useSetting();
  const { autoBackup, toggleAutoBackup } = useSetting();
  const { reminder, toggleReminder } = useSetting();

  return (
    <View className="h-full flex-col justify-evenly gap-5 py-10 items-center">
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

      <View className="bg-white p-4 rounded-lg w-[90%]">
        <Button title="note 📝"></Button>
      </View>

      <View className="justify-center gap-2 bg-white rounded-lg p-4 w-[90%] h-48">
        <Button title="logout"></Button>
        <View className="flex-row justify-evenly">
          <Button title="Backup" />
          <Button title="Restore" />
        </View>
      </View>
    </View>
  );
}
