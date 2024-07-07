import { images } from "@constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const RecentPost = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold">Recent Post</h2>
      <Image src={images.RecentPostImg} alt="Wearing glasses while coding on a computer" className="h-[400px] object-cover mt-4" />
      <p className="mt-3 text-sm font-medium text-gray-700">Saad Ksioui - 27 Jun 2024</p>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">The Importance of Using Glasses While Coding</h1>
        <ArrowUpRight />
      </div>
      <p className="mt-2 text-sm font-medium text-gray-600">In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen. While this is essential for coding, it can take a toll on your eyes. Here, we delve into the importance of using glasses while coding and how they can benefit you.</p>
      <div className="flex items-center gap-5 mt-4">
        <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Research</span>
        <span className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black">Health</span>
      </div>
    </section>
  )
};

export default RecentPost
