'use client'

import { useState } from "react"
import Image from "./Image"
import shareAction from "@/action";
import NextImage from "next/image"
import ImageEditor from "./ImageEditor";


const Share = () => {

  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState
    <{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
    ({
      type: "original",
      sensitive: false
    });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0])
    }
  }

  const previewURL = media ? URL.createObjectURL(media) : null;
  return (
    <form className="p-4 flex gap-4" action={formData => shareAction(formData, settings)}>
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.png" alt="avatar" w={100} h={100} tr={true} />
      </div>

      {/* Others */}
      <div className="flex-1 flex flex-col gap-4">
        <input name="desc" type="text" placeholder="What is Happening?!" className="bg-transparent outline-none placeholder:text-textGray text-xl" />
        {
          // Shareing Image
          // Preview Image
          media?.type.includes("image") && previewURL &&
          <div className="relative rounded-xl overflow-hidden">
            <NextImage className={`w-full ${settings.type === "original"
              ? "h-full object-contain"
              : settings.type === "square"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
              }`} src={previewURL} alt="Preview Image" width={600} height={600}
            />

            <div onClick={() => setIsEditorOpen(true)} className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer">Edit</div>
            <div onClick={() => setMedia(null)} className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm">X</div>
          </div>
        }
        {
          media?.type.includes('video') && previewURL && (
            <div className="relative">
              <video src={previewURL} controls />
              <div onClick={() => setMedia(null)} className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm">X</div>
            </div>
          )
        }

        {
          isEditorOpen && previewURL && <ImageEditor onClose={() => setIsEditorOpen(false)} previewURL={previewURL} settings={settings} setSettings={setSettings} />
        }

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input accept="image/*,video/*" name="file" className="hidden" id="file" type="file" onChange={handleMediaChange} />
            <label htmlFor="file">
              <Image path="icons/image.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
            </label>
            <Image path="icons/gif.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
            <Image path="icons/poll.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
            <Image path="icons/emoji.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
            <Image path="icons/schedule.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
            <Image path="icons/location.svg" className="cursor-pointer" alt="avatar" w={20} h={20} />
          </div>
          <button type="submit" className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
        </div>
      </div>
    </form>
  )
}

export default Share
