import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOption, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import CreateChat from '@/components/groupChat/CreateChat'
import { fetchChatGroup } from '@/fetch/groupFetch'
import GroupChatCard from '@/components/groupChat/GroupChatCard'

const page = async () => {

  const session: CustomSession | null = await getServerSession(authOption);
  const group: Array<GroupChatType> | [] = session?.user?.token ? await fetchChatGroup(session.user.token) : []

  return (
    <div>
      <DashNav name={session?.user?.name ?? ''} image={session?.user?.image ?? ''}/>
      <div className='container'>
        <div className='flex justify-end mt-10'>
          {session?.user && <CreateChat user={session.user}/>}
        </div>

        <div className="grid ml-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {group.length > 0 &&
            group.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session!.user!} />
            ))}
        </div>


      </div>
    </div>
  )
}

export default page