'use client'

import { getSocket } from '@/lib/socket.config'
import React, { useEffect, useMemo } from 'react'
import {v4 as uuidV4} from "uuid";
import { Button } from '../ui/button';

const ChatBase = () => {

  const socket = useMemo(() => {
    const socket = getSocket();
    return socket.connect()
  }, [])

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("The socket message is: ", data);
    })

    return () => {
      socket.close();
    }
  })

  const handleClick = () => {
    socket.emit("message", {name: "pratik", id: uuidV4()})
  }

  return (
    <div>
      <Button onClick={handleClick}>Send Message</Button>
    </div>
  )
}

export default ChatBase