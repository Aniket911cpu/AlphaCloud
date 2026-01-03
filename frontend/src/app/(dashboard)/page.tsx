import { UsageChart } from "@/components/dashboard/usage-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, DollarSign, Server, Users } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    {/* CalendarDateRangePicker would go here */}
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-white border-white/10">
                        Download Report
                    </button>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Total Revenue
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Active Instances
                        </CardTitle>
                        <Server className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">+2350</div>
                        <p className="text-xs text-muted-foreground">
                            +180 new since last hour
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            API Requests
                        </CardTitle>
                        <Activity className="h-4 w-4 text-amber-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">+12,234,293</div>
                        <p className="text-xs text-muted-foreground">
                            +19% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Active Users
                        </CardTitle>
                        <Users className="h-4 w-4 text-purple-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 since last hour
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <UsageChart />

                <Card className="col-span-3 bg-white/5 border-white/10 backdrop-blur-md">
                    <CardHeader>
                        <CardTitle className="text-white">Recent Activity</CardTitle>
                        <CardContent>
                            <div className="space-y-8 mt-4">
                                {/* Mock Activity Items */}
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-4" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">Instance Created</p>
                                        <p className="text-xs text-muted-foreground">
                                            nexus-web-prod-01 was provisioned in nyc1
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-muted-foreground">2m ago</div>
                                </div>

                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-4" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">High CPU Alert</p>
                                        <p className="text-xs text-muted-foreground">
                                            nexus-db-03 reached 90% CPU
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-muted-foreground">15m ago</div>
                                </div>

                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-4" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">Backup Completed</p>
                                        <p className="text-xs text-muted-foreground">
                                            Daily snapshot for volume-1234
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-muted-foreground">1h ago</div>
                                </div>

                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}
