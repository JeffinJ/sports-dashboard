"use dom"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";
import "../../global.css";


const chartData = [
    { position: "forwards", players: 8, fill: "var(--color-forwards)" },
    { position: "midfielders", players: 12, fill: "var(--color-midfielders)" },
    { position: "defenders", players: 10, fill: "var(--color-defenders)" },
    { position: "goalkeepers", players: 3, fill: "var(--color-goalkeepers)" },
]

const chartConfig = {
    players: {
        label: "Players",
    },
    forwards: {
        label: "Forwards",
        color: "var(--chart-1)",
        },
    midfielders: {
        label: "Midfielders",
        color: "var(--chart-2)",
    },
    defenders: {
        label: "Defenders",
        color: "var(--chart-3)",
    },
    goalkeepers: {
        label: "Goalkeepers",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig

function FootballTeamChart() {
    return (
        <div>
            <Card className="flex flex-col h-fit">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Squad Composition</CardTitle>
                    <CardDescription>Player Distribution by Position - 2024/25 Season</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel nameKey="position" />}
                            />
                            <RadialBar dataKey="players" background />
                        </RadialBarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 leading-none font-medium">
                        Squad depth improved by 15% this season <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="text-muted-foreground leading-none">
                        Showing current squad composition across all positions
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default FootballTeamChart;