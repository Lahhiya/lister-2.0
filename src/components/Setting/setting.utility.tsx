import { Button, View } from "react-native"

export default function SettingUtility() {
    return (
        <View className="w-full items-center gap-4">
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
    )
}