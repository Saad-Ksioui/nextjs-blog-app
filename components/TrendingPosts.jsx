import { images } from "@constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";


const TrendingPosts = () => {
  return (
    <div className="sticky top-4 z-100">
      <h2 className="text-xl font-bold">Trending Posts</h2>
      <div className="flex flex-col items-start gap-4 mt-4">
        <div className="flex gap-2 items-start">
          <Image src={images.TrendingPostImg1} alt="ReactJs" className="w-[195px] object-cover" />
          <div>
            <p className="text-xs font-medium text-gray-700">Saad Ksioui - 05 Jul 2024</p>
            <h1 className="font-semibold leading-5">How to Make a Request from a Server Using ReactJS</h1>
            <p className="mt-1 text-xs font-medium text-gray-600">In modern web development, making requests to a server is a...</p>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <Image src={images.TrendingPostImg2} alt="ReactJs" className="w-[195px] object-cover" />
          <div>
            <p className="text-xs font-medium text-gray-700">Saad Ksioui - 12 May 2024</p>
            <h1 className="font-semibold leading-5">How to Center a Div in CSS</h1>
            <p className="mt-1 text-xs font-medium text-gray-600">Centering a div element in CSS can sometimes be tricky, especially when dealing with different...</p>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <Image src={images.TrendingPostImg3} alt="ReactJs" className="w-[195px] object-cover" />
          <div>
            <p className="text-xs font-medium text-gray-700">Saad Ksioui - 07 Jul 2024</p>
            <h1 className="font-semibold leading-5">Understanding the New app/router Folder in Next.js</h1>
            <p className="mt-1 text-xs font-medium text-gray-600">Next.js has introduced the app/router folder as part of its...</p>
          </div>
        </div>

      </div>
    </div>
  )
};

export default TrendingPosts
