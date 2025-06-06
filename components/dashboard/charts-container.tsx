import { View } from "react-native";
import FootballTeamChart from "./football-team-chart";
import TeamBarChartContainer from "./team-bar-chart-container";

export default function ChartsContainer() {
    return (
        <View className="p-5 w-full flex flex-col gap-5 h-full ">
            <FootballTeamChart />
            <TeamBarChartContainer />
        </View>
    );
}
