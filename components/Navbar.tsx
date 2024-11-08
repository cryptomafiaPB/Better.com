import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Better
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign in</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Get started
          </Button>
        </div>
      </div>
    </nav>
  )
}