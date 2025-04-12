import ChatBase from '@/components/chat/ChatBase';
import { fetchChats } from '@/fetch/chatsFetch';
import { fetchChatGroupsingle, fetchChatUsers } from '@/fetch/groupFetch';
import { notFound } from 'next/navigation';
import React from 'react'

const page = async ({params}: {params: {id:string}}) => {

  if(params.id.length !== 36){
    return notFound();
  }

  const group:GroupChatType | null = await fetchChatGroupsingle(params.id);
  if(group === null){
    return notFound();
  }

  const users: Array<GroupChatUserType> | [] = await fetchChatUsers(params.id);
  const chats: Array<MessageType> | [] = await fetchChats(params.id);

  return (  
    <>
      <ChatBase users={users} group={group} oldMessages={chats} />
    </>
  )
}

export default page