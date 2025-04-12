import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOption, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import CreateChat from '@/components/groupChat/CreateChat'
import { fetchChatGroup } from '@/fetch/groupFetch'
import GroupChatCard from '@/components/groupChat/GroupChatCard'
import Link from 'next/link'
import { APP_URL } from '@/lib/apiEndPoints'
import Image from 'next/image'

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
            <Link href={`${APP_URL}/chat/${item.id}`} key={index} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <GroupChatCard group={item} key={index} user={session!.user!} />
              </a>
          </Link>
          ))}
        </div>

        {group.length === 0 && 
          <div className='flex flex-col items-center justify-center'>
            <p className='text-4xl inline-block font-bold '>No Chat Group</p>
            <Image src='/images/conversation.svg' alt='' width={700} height={700}  />
          </div>
        }

      </div>
    </div>
  )
}

export default page