import Feed from "@/components/Feed"
import Image from "@/components/Image"
import Link from "next/link"


const UserPage = () => {
  return (
    <div className="">
      {/* Profile Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href={"/"}><Image path="icons/back.svg" alt="back" w={24} h={24} /></Link>
        <h1 className="font-bold text-lg">Ayush Panwar</h1>
      </div>
      {/* INFO */}
      <div className="">
        {/* Cover & Avatar Container */}
        <div className="relative w-full">
          {/* Cover */}
          <div className="w-full aspect-[3/1] relative">
            <Image path="general/cover.jpg" alt="" h={200} w={600} tr={true} />
          </div>
          {/* Avatar */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-black border-4 bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image path="general/avatar.png" alt="" h={100} w={100} tr={true} />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" w={20} h={20} alt="more" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" w={20} h={20} alt="more" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" w={20} h={20} alt="more" />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">Follow</button>
        </div>

        {/* User Details */}
        <div className="p-4 flex flex-col gap-2">
          {/* Username & Handle */}
          <div className="">
            <h1 className="text-2xl font-bold">Ayush Panwar</h1>
            <span className="text-textGray text-sm">@AyushPanwar</span>
          </div>
          <p>Ayush Panwar Next js Developer</p>
          {/* Job & Location & Date */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image path="icons/userLocation.svg" alt="location" w={20} h={20} />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="icons/date.svg" alt="location" w={20} h={20} />
              <span>Joined March 2024</span>
            </div>
          </div>
          {/* Following & Followers */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <Feed/>
    </div>
  )
}

export default UserPage
