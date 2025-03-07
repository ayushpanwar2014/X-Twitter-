import Link from "next/link"
import Image from "./Image"

const Recommendation = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
        {/* USER CARD */}
        <div className="flex items-center justify-between">
            {/* Image and User Info */}
            <div className="flex items-center gap-4">
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="avatar" w={100} h={100} tr={true}/>
                </div>
                <div className="">
                    <h1 className="text-md font-bold">Ayush Panwar</h1>
                    <span className="text-textGray text-sm">@AyushPanwar</span>
                </div>
            </div>
            {/* Button */}
            <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
        </div>
        <div className="flex items-center justify-between">
            {/* Image and User Info */}
            <div className="flex items-center gap-4">
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="avatar" w={100} h={100} tr={true}/>
                </div>
                <div className="">
                    <h1 className="text-md font-bold">Ayush Panwar</h1>
                    <span className="text-textGray text-sm">@AyushPanwar</span>
                </div>
            </div>
            {/* Button */}
            <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
        </div>
        <div className="flex items-center justify-between">
            {/* Image and User Info */}
            <div className="flex items-center gap-4">
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="avatar" w={100} h={100} tr={true}/>
                </div>
                <div className="">
                    <h1 className="text-md font-bold">Ayush Panwar</h1>
                    <span className="text-textGray text-sm">@AyushPanwar</span>
                </div>
            </div>
            {/* Button */}
            <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
        </div>

        <Link href={"/"} className="text-iconBlue">Show More</Link>
    </div>
  )
}

export default Recommendation
