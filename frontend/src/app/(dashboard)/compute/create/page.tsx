"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, Server, Globe } from "lucide-react"

export default function CreateComputePage() {
    const [selectedRegion, setSelectedRegion] = useState("nyc1")
    const [selectedImage, setSelectedImage] = useState("ubuntu")
    const [provisioning, setProvisioning] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleCreate = () => {
        setProvisioning(true)
        // Simulate provisioning steps needed for the next implementation task
        let p = 0
        const interval = setInterval(() => {
            p += 10
            setProgress(p)
            if (p >= 100) {
                clearInterval(interval)
                // Redirect or show success
            }
        }, 500)
    }

    if (provisioning) {
        return (
            <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8 text-center">
                    <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 rounded-full border-4 border-white/10 border-t-primary animate-spin" />
                        <Server className="absolute inset-0 m-auto w-12 h-12 text-primary animate-pulse" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Provisioning Droplet...</h2>

                        <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="text-sm text-muted-foreground font-mono">
                            {progress < 30 && "Allocating IP Address..."}
                            {progress >= 30 && progress < 60 && "Booting Kernel..."}
                            {progress >= 60 && progress < 90 && "Configuring SSH Keys..."}
                            {progress >= 90 && "Finalizing..."}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Create Droplet</h2>
                <p className="text-muted-foreground">Choose your image, size, and region.</p>
            </div>

            <div className="grid gap-8">

                {/* 1. Choose Region */}
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">1. Choose Region</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['nyc1', 'sfo3', 'lon1', 'sgp1'].map((region) => (
                            <div
                                key={region}
                                onClick={() => setSelectedRegion(region)}
                                className={`
                            cursor-pointer relative p-4 rounded-xl border-2 transition-all hover:bg-white/5
                            ${selectedRegion === region ? 'border-primary bg-primary/5' : 'border-white/10'}
                        `}
                            >
                                <Globe className={`w-6 h-6 mb-2 ${selectedRegion === region ? 'text-primary' : 'text-muted-foreground'}`} />
                                <div className="font-bold text-white uppercase">{region}</div>
                                <div className="text-xs text-muted-foreground">Datacenter</div>
                                {selectedRegion === region && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-primary" />}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Choose Image */}
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">2. Choose Image</h3>
                    <Tabs defaultValue="os" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
                            <TabsTrigger value="os">OS Distributions</TabsTrigger>
                            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
                        </TabsList>
                        <TabsContent value="os" className="mt-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['ubuntu', 'fedora', 'debian', 'rocky'].map((os) => (
                                    <div
                                        key={os}
                                        onClick={() => setSelectedImage(os)}
                                        className={`
                                    cursor-pointer relative p-4 rounded-xl border-2 transition-all hover:bg-white/5 flex items-center gap-3
                                    ${selectedImage === os ? 'border-primary bg-primary/5' : 'border-white/10'}
                                `}
                                    >
                                        {/* Placeholder Icons for OS */}
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs uppercase">
                                            {os[0]}
                                        </div>
                                        <div className="font-medium text-white capitalize">{os}</div>
                                        {selectedImage === os && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-primary" />}
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* 3. Choose Size */}
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">3. Choose Size</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { name: 'Basic', price: '$5/mo', spec: '1 vCPU / 1 GB RAM' },
                            { name: 'Pro', price: '$20/mo', spec: '2 vCPU / 4 GB RAM' }, // Default
                            { name: 'Ultra', price: '$80/mo', spec: '8 vCPU / 16 GB RAM' },
                        ].map((plan) => (
                            <Card key={plan.name} className="bg-white/5 border-white/10 hover:border-primary/50 cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-white flex justify-between">
                                        {plan.name}
                                        <span className="text-primary">{plan.price}</span>
                                    </CardTitle>
                                    <CardDescription>{plan.spec}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* 4. Finalize */}
                <section className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xl font-bold text-white">
                        Total: <span className="text-primary">$20/mo</span>
                    </div>
                    <Button size="lg" onClick={handleCreate} className="bg-primary hover:bg-primary/90 text-white px-8">
                        Create Droplet
                    </Button>
                </section>

            </div>
        </div>
    )
}
