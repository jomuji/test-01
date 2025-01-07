import { Button } from "@/components/ui/button"

    export default function Home() {
      return (
        <main className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js Website</h1>
          <p className="text-lg mb-8">This is a simple website built with Next.js 15 and shadcn/ui</p>
          <Button>Get Started</Button>
        </main>
      )
    }
