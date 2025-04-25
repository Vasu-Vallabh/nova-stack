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

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  commands,
  tip,
}: FeatureCardProps) => {
  return (
    <div className="group relative rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
      <div className={`mb-4 w-fit rounded-xl bg-gradient-to-br from-${gradientFrom} to-${gradientTo} p-3`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="mb-3 text-sm text-gray-300">{description}</p>
      {commands && (
        <div className="mt-4 overflow-hidden rounded bg-black/30 p-2">
          {commands.map((cmd, i) => (
            <code key={i} className="block font-mono text-xs text-emerald-400">
              $ {cmd}
            </code>
          ))}
        </div>
      )}
      {tip && (
        <p className="mt-2 text-xs text-gray-400">
          <span className="font-semibold text-gray-300">Pro tip:</span> {tip}
        </p>
      )}
    </div>
  )
}
