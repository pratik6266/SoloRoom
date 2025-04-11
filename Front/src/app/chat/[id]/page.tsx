import ChatBase from '@/components/chat/ChatBase';
import React from 'react'

const page = ({params}: {params: {id:string}}) => {
  console.log('The group id is:', params.id);
  return (
    <>
      <div>Hello There</div>
      <ChatBase />
    </>
  )
}

export default page