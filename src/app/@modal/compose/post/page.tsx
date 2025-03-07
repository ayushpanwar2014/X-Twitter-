'use client'
import Image from '@/components/Image'
import { useRouter } from 'next/navigation'

const PostModal = () => {

    const router = useRouter();

    const closeModal = () => {
        router.back();
    }
    return (
        <div className='absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center'>
            <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
                {/* Top  */}
                <div className="flex items-center justify-between">
                    <div onClick={closeModal} className="cursor-pointer">X</div>
                    <div className="text-iconBlue font-bold">Drafts</div>
                </div>

                {/* Center  */}
                <div className="py-8 flex gap-4 ">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image path='general/avatar.png' alt='Ayush Panwar' h={100} w={100} tr={true} />
                    </div>
                    <input className='flex-1 bg-transparent text-lg outline-none placeholder:text-textGray' type="text" placeholder='What is Happening?!' />
                </div>
                {/* Bottom  */}
                <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
                    <div className="flex gap-4 flex-wrap">
                        <Image path="icons/image.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
                        <Image path="icons/gif.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
                        <Image path="icons/poll.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
                        <Image path="icons/emoji.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
                        <Image path="icons/schedule.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
                        <Image path="icons/location.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
                    </div>
                    <button className='cursor-pointer font-bold py-2 px-5 text-black bg-white rounded-full'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostModal
