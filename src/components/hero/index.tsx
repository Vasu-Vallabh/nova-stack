import { Command, FlaskConical, Globe2, Rocket, Zap, LucideIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { FeatureCard } from './feature-card'
import { WorkflowGuide } from './workflow-guide'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

const mainFeaturesData: Feature[] = [
  {
    icon: Rocket,
    title: 'Modern Stack',
    description: 'Built with React, TypeScript, and Vite for lightning-fast development',
    gradientFrom: 'indigo-400',
    gradientTo: 'purple-400',
  },
  {
    icon: Command,
    title: 'Code Quality',
    description: 'ESLint, Prettier, and TypeScript for robust code quality',
    gradientFrom: 'purple-400',
    gradientTo: 'pink-400',
  },
  {
    icon: FlaskConical,
    title: 'Component Library',
    description: 'Pre-built shadcn/ui components for rapid development',
    gradientFrom: 'pink-400',
    gradientTo: 'rose-400',
  },
  {
    icon: Globe2,
    title: 'Production Ready',
    description: 'Optimized for production with best practices built-in',
    gradientFrom: 'rose-400',
    gradientTo: 'orange-400',
  },
]

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-8">
              <h1 className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl xl:text-7xl/none">
                Build Beautiful Apps
                <br />
                With Best Practices Built In
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl/relaxed lg:text-2xl/relaxed">
                A modern React starter template with everything you need to build production-ready applications
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white/95 px-8 py-3 text-lg font-bold text-indigo-600 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl"
                  size={'lg'}
                  asChild
                >
                  <a href="https://github.com/Vasu-Vallabh/nova-stack" className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Get Started
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-white/20 bg-white/5 px-8 py-3 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  size={'lg'}
                  asChild
                >
                  <a href="#features">Features</a>
                </Button>
              </div>
            </div>

            <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
              {mainFeaturesData.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradientFrom={feature.gradientFrom}
                  gradientTo={feature.gradientTo}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <WorkflowGuide />
    </div>
  )
}
