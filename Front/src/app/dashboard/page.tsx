import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOption, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

const page = async () => {

  const session: CustomSession | null = await getServerSession(authOption);

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <DashNav name={session?.user?.name ?? ''} image={session?.user?.image ?? ''}/>
    </div>
  )
}

export default page