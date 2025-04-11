import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOption, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

const page = async () => {

  const session: CustomSession | null = await getServerSession(authOption);

  return (
    <div>
      <DashNav name={session?.user?.name || 'Guest'} image={session?.user?.image || '/default-image.png'}/>
    </div>
  )
}

export default page