import { Button } from '../ui/button'
import { Github } from 'lucide-react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

export function Header() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center space-x-2">
          <Logo className="h-8 w-8 fill-current text-white" />
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-xl font-bold text-transparent">
            Nova Stack
          </span>
        </a>
        <div className="flex items-center gap-6">
          <Button size={'icon'} variant="ghost" className="rounded-full hover:bg-white/10" asChild>
            <a
              href="https://github.com/Vasu-Vallabh/nova-stack"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <Github />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
