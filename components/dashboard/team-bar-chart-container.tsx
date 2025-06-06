import { TEAM_PERFORMANCE_QUERY } from "@/queries/team-perfomance";
import { TeamPerformance } from "@/types/team-perfomance.types";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { Text, View } from "react-native";
import Error from "../error";
import Loading from "../loading";
import FootballTeamBarChart from "./football-team-bar-chart";

export default function TeamBarChartContainer() {

    const { data, loading, error } = useQuery(TEAM_PERFORMANCE_QUERY, {
        variables: { id: 1 },
    });

    const teamPerformance: TeamPerformance[] = useMemo(() => {
        return data?.teamPerformance.map(({ date, goals, assists }: TeamPerformance) => ({
            date,
            goals,
            assists,
        })) || [];
    }, [data]);

    console.log(teamPerformance);
    if (loading) return <Loading message="Loading team performance data..." className="flex-1 items-center justify-center" />;
    if (error) return <Error className="flex-1 items-center justify-center" />;
    if (!data || !data.teamPerformance) return <View className="flex-1 items-center justify-center"><Text>No data available</Text></View>;

    return (
        <View className="flex-1">
            <FootballTeamBarChart teamPerformanceData={teamPerformance} />
        </View>
    );
}