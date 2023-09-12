'use client'
import Link from 'next/link'
import Menu from './Menu'

const Header: React.FC = () => {
  return (
    <header className="shadow-lg shadow-gray-100">
      <div className="container mx-auto flex max-w-screen-sm items-center justify-between px-1 py-5">
        <Link href="/" className="cursor-pointer text-xl font-bold">
          こんにちは
        </Link>

        <div className="flex items-center justify-center space-x-2">
          <Menu/>
        </div>
      </div>
    </header>
  )
}

export default Header
