import Image from "./Image"
import PostInfo from "./PostInfo"
import PostInteraction from "./PostInteraction"
import { imagekit } from "@/utils"
import Video from "./Video";
import Link from "next/link";

interface FileDetailsResponse {
    width: number,
    height: number,
    filePath: string,
    url: string,
    fileType: string,
    customMetadata?: { sensitive: boolean };
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {

    const getFileDetails = async (fileId: string): Promise<FileDetailsResponse> => {
        return new Promise((resolve, reject) => {
            imagekit.getFileDetails(fileId, function (error, result) {
                if (error) reject(error);
                else resolve(result as FileDetailsResponse);
            });
        })
    }

    const fileDetails = await getFileDetails("67cd1b8d432c476416b82dd2");



    return (
        <div className="p-4 border-y-[1px] border-borderGray">

            {/* Post Type */}
            <div className="flex items-start gap-2 text-sm text-textGray mb-2 from-bold ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#71767b" d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
                </svg>
                <span>Ayush Panwar Reposted</span>
            </div>

            {/* Post Content */}

            {/* <div className="flex gap-4"> */}
            <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>

                {/* Avatar */}

                <div className={`${type === "status" && "hidden"} relative w-10 h-10 rounded-full overflow-hidden cursor-pointer`}>

                    <Image path='general/avatar.png' alt="avatar" w={100} h={100} tr={true} />

                </div>

                {/* Content */}

                <div className="flex-1 flex flex-col gap-2">
                    {/* Top */}
                    <div className="w-full flex justify-between">

                        <Link href={'/AyushPanwar'} className="flex gap-4">
                            <div className={`${type !== "status" && "hidden"} relative w-10 h-10 rounded-full overflow-hidden cursor-pointer`}>

                                <Image path='general/avatar.png' alt="avatar" w={100} h={100} tr={true} />

                            </div>
                            <div className={`flex items-center gap-2 flex-wrap ${type === "status" && " flex-col gap-0 !items-start"}`}>
                                <h1 className="text-md font-bold">Ayush Panwar</h1>
                                <span className="text-textGray text-sm">@AyushPanwar</span>

                                {type !== "status" &&
                                    <span className="text-textGray text-sm">1 day ago</span>
                                }
                            </div>
                        </Link>
                        <PostInfo />
                    </div>


                    {/* Text-Media */}
                    <Link href={"/AyushPanwar/status/123"}>
                        <p className={`${type === "status" && "text-lg"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maiores voluptates architecto optio nisi nostrum facere ducimus cum magni dolore quisquam corrupti voluptatibus quidem consectetur in enim, numquam accusamus at.</p>
                    </Link>

                    {/* <Image path="general/post.jpeg" alt="post" w={600} h={600} /> */}

                    {fileDetails && fileDetails.fileType === "image" ? (<Image className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""} path={fileDetails.filePath} alt="" w={fileDetails.width} h={fileDetails.height} />) :
                        <Video path={fileDetails.filePath} className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""} />
                    }
                    {type === 'status' &&
                        <span className="text-textGray">8:41 PM • March 7, 2025</span>
                    }
                    <PostInteraction />
                </div>

            </div>
        </div>
    )
}

export default Post
