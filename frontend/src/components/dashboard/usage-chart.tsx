"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    {
        average: 400,
        today: 240,
    },
    {
        average: 300,
        today: 139,
    },
    {
        average: 200,
        today: 980,
    },
    {
        average: 278,
        today: 390,
    },
    {
        average: 189,
        today: 480,
    },
    {
        average: 239,
        today: 380,
    },
    {
        average: 349,
        today: 430,
    },
]

export function UsageChart() {
    return (
        <Card className="col-span-4 bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
                <CardTitle className="text-white">CPU Usage Trend</CardTitle>
                <CardDescription className="text-muted-foreground">Average load across all instances</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data}>
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="rounded-lg border border-white/10 bg-black/80 backdrop-blur-xl p-2 shadow-sm">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                        Average
                                                    </span>
                                                    <span className="font-bold text-muted-foreground">
                                                        {payload[0].value}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                        Today
                                                    </span>
                                                    <span className="font-bold text-white">
                                                        {payload[1].value}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="average"
                            stroke="#888888"
                            strokeWidth={2}
                            activeDot={{
                                r: 6,
                                style: { fill: "#888888", opacity: 0.25 },
                            }}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="today"
                            stroke="#00f0ff"
                            strokeWidth={2}
                            activeDot={{
                                r: 8,
                                style: { fill: "#00f0ff" },
                            }}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
