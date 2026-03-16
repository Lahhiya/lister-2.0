import { View,Text,ScrollView} from "react-native"
import OrderListItem from "@/components/list/ListOrderItem"
export default function OrderListContainer(){
    return(
        <View className="h-full flex-col">
            <View className="">
                <Text className="text-3xl m-3">daftar :</Text>
            </View>
            <ScrollView className="">
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>
                <OrderListItem></OrderListItem>

            </ScrollView>
        </View>
    )
}