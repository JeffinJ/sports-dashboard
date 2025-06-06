
import { View } from "react-native";
import ChartsContainer from "./charts-container";

function DashboardContainer() {
  return (
    <View className="flex flex-col w-full gap-5  text-black ">
      <ChartsContainer />
    </View>
  )
}

export default DashboardContainer;