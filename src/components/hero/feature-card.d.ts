import { LucideIcon } from 'lucide-react'
interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  commands?: string[]
  tip?: string
}
export declare const FeatureCard: ({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  commands,
  tip,
}: FeatureCardProps) => import('react/jsx-runtime').JSX.Element
export {}
