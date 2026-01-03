"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreVertical, Server, Power, Terminal, Trash } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

const instances = [
    {
        id: "inst-01",
        name: "nexus-web-prod-01",
        ip: "192.168.1.50",
        region: "nyc1",
        status: "running",
        size: "s-2vcpu-4gb",
        created: "2023-10-25",
    },
    {
        id: "inst-02",
        name: "nexus-db-read-01",
        ip: "10.0.0.5",
        region: "nyc1",
        status: "running",
        size: "m-4vcpu-16gb",
        created: "2023-10-20",
    },
    {
        id: "inst-03",
        name: "nexus-worker-gpu-01",
        ip: "10.0.0.12",
        region: "sfo3",
        status: "stopped",
        size: "g-8vcpu-32gb",
        created: "2023-10-15",
    },
]

export default function ComputePage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Compute Engine</h2>
                    <p className="text-muted-foreground">Manage your virtual machines and kubernetes clusters.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href="/compute/create">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                            <Plus className="mr-2 h-4 w-4" /> Create Droplet
                        </Button>
                    </Link>
                </div>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-white">Instances</CardTitle>
                    <CardDescription>You have 3 active droplets running across 2 regions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/10 hover:bg-white/5">
                                <TableHead className="w-[200px] text-white">Name</TableHead>
                                <TableHead className="text-white">IP Address</TableHead>
                                <TableHead className="text-white">Region</TableHead>
                                <TableHead className="text-white">Status</TableHead>
                                <TableHead className="text-white">Size</TableHead>
                                <TableHead className="text-right text-white">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {instances.map((inst) => (
                                <TableRow key={inst.id} className="border-white/10 hover:bg-white/5">
                                    <TableCell className="font-medium text-white flex items-center gap-2">
                                        <Server className="w-4 h-4 text-muted-foreground" />
                                        {inst.name}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{inst.ip}</TableCell>
                                    <TableCell className="text-muted-foreground uppercase">{inst.region}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`
                            ${inst.status === 'running' ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-red-500/30 bg-red-500/10 text-red-400'}
                             capitalize
                        `}>
                                            {inst.status === 'running' && <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />}
                                            {inst.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground text-xs font-mono">{inst.size}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 p-0 text-muted-foreground hover:text-white">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem><Terminal className="mr-2 h-4 w-4" /> Console Access</DropdownMenuItem>
                                                <DropdownMenuItem><Power className="mr-2 h-4 w-4" /> Reboot</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-500 focus:text-red-500"><Trash className="mr-2 h-4 w-4" /> Destroy</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
