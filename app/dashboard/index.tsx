import CardView from "@/components/card-view";
import { Text, View } from "react-native";
import "../../global.css";
export default function DashboardPage() {

    return (
        <View className="h-screen bg-white">
            <Text className="font-semibold text-xl">
                Dashhboard
            </Text>
            <CardView />
        </View >
    )
}