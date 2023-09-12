'use client'

import { useSession } from 'next-auth/react'
import Login from '../auth/Login'
import Logout from '../auth/Logout'

// メニュー
const Menu: React.FC = () => {
  const { data: session, status } = useSession()
  const user = session?.user
  return (
    <div className="relative">
      <div className="absolute right-0 z-10 w-40 overflow-hidden rounded-lg bg-white text-sm shadow-lg shadow-gray-100">
        <div className="cursor-pointer">
          {status === 'authenticated' && user ? (
            <div>
              <p>セッションの期限：{session.expires}</p>
              <p>ようこそ、{user.name}さん</p>
              <img src={user.image as string} alt='' style={{ borderRadius: '50px' }} />
              <div>
                <Logout />
              </div>
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu
