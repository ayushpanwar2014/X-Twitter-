import Comments from '@/components/Comments'
import Image from '@/components/Image'
import Post from '@/components/Post'
import Link from 'next/link'
import React from 'react'

const StatusPage = () => {
  return (
    <div>
         {/* Profile Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href={"/"}><Image path="icons/back.svg" alt="back" w={24} h={24} /></Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
        <Post type="status"/>
        <Comments/>
    </div>
  )
}

export default StatusPage
