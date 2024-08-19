// components/MainComponent.tsx
import { Button } from "@/components/ui/button"

export default function MainComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8">Welcome to v0template</h1>
            <Button>Click me</Button>
        </main>
    )
}
