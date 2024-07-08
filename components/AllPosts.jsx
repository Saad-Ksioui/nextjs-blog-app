import { images } from "@constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllPosts = () => {
  return (
    <section className="w-4/5 mx-auto my-10 font-poppins">
      <h2 className="text-2xl font-bold">All Posts</h2>
      <div className="grid grid-cols-3 gap-5">
        <div>
          <Image src={images.RecentPostImg} alt="Wearing glasses while coding on a computer" className="h-[247px] object-cover mt-4" />
          <p className="mt-3 text-sm font-medium text-gray-700">Saad Ksioui - 27 Jun 2024</p>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">The Importance of Using Glasses While Coding</h1>
            <ArrowUpRight />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...</p>
          <div className="flex items-center gap-5 mt-4">
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Research</span>
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Health</span>
          </div>
        </div>
        <div>
          <Image src={images.RecentPostImg} alt="Wearing glasses while coding on a computer" className="h-[247px] object-cover mt-4" />
          <p className="mt-3 text-sm font-medium text-gray-700">Saad Ksioui - 27 Jun 2024</p>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">The Importance of Using Glasses While Coding</h1>
            <ArrowUpRight />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...</p>
          <div className="flex items-center gap-5 mt-4">
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Research</span>
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Health</span>
          </div>
        </div>
        <div>
          <Image src={images.RecentPostImg} alt="Wearing glasses while coding on a computer" className="h-[247px] object-cover mt-4" />
          <p className="mt-3 text-sm font-medium text-gray-700">Saad Ksioui - 27 Jun 2024</p>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">The Importance of Using Glasses While Coding</h1>
            <ArrowUpRight />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...</p>
          <div className="flex items-center gap-5 mt-4">
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Research</span>
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Health</span>
          </div>
        </div>
        <div>
          <Image src={images.RecentPostImg} alt="Wearing glasses while coding on a computer" className="h-[247px] object-cover mt-4" />
          <p className="mt-3 text-sm font-medium text-gray-700">Saad Ksioui - 27 Jun 2024</p>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">The Importance of Using Glasses While Coding</h1>
            <ArrowUpRight />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...</p>
          <div className="flex items-center gap-5 mt-4">
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Research</span>
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Health</span>
          </div>
        </div>
        <div>
          <Image src={images.RecentPostImg} alt="Wearing glasses while coding on a computer" className="h-[247px] object-cover mt-4" />
          <p className="mt-3 text-sm font-medium text-gray-700">Saad Ksioui - 27 Jun 2024</p>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">The Importance of Using Glasses While Coding</h1>
            <ArrowUpRight />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...</p>
          <div className="flex items-center gap-5 mt-4">
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Research</span>
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Health</span>
          </div>
        </div>
        <div>
          <Image src={images.RecentPostImg} alt="Wearing glasses while coding on a computer" className="h-[247px] object-cover mt-4" />
          <p className="mt-3 text-sm font-medium text-gray-700">Saad Ksioui - 27 Jun 2024</p>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">The Importance of Using Glasses While Coding</h1>
            <ArrowUpRight />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...</p>
          <div className="flex items-center gap-5 mt-4">
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Research</span>
            <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Health</span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
      <Link href="/blogs" className="bg-[#101727] text-white px-3 py-2 rounded-lg">
        View more
      </Link>
      </div>
    </section>
  )
};

export default AllPosts
