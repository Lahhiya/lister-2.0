import { View,Text,FlatList,Button,TouchableOpacity} from "react-native"
import OrderListItem from "@/components/list/ListOrderItem"
import useDisplayData from "@/hooks/useDisplayData"
import useSettingStore from "@/store/useSettingStore"
export default function OrderListContainer(){
    const data = useDisplayData()
    const setSort = useSettingStore((state)=> state.setSortBy)
    return(
        <View className="h-full flex-col">
            <View className="flex-row justify-center">
                <View className="flex-1">
                    <Button title="nama" onPress={() => setSort("name")}></Button>
                </View>
                <View className="flex-1">
                    <Button title="status" onPress={() => setSort("status")}></Button>
                </View>
                <View className="flex-1">
                    <Button title="jumlah" onPress={() => setSort("amount")}></Button>
                </View>
                <View className="flex-1">
                    <Button title="reset" onPress={() => setSort("none")}></Button>
                </View>
            </View>
            <View>
                <Text className="text-3xl m-3">daftar pesanan :</Text>
            </View>
            <FlatList
            data={data}
            renderItem={({item}) => <OrderListItem item={item!} />}
            keyExtractor={(item,index) => index.toString()}
            />
        </View>
    )
}