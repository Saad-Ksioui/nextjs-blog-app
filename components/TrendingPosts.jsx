import { images } from "@constants";
import Image from "next/image";

const TrendingPosts = () => {
  const trendingPosts = [
    {
      src: images.TrendingPostImg1,
      alt: "ReactJs",
      date: "05 Jul 2024",
      title: "How to Make a Request from a Server Using ReactJS",
      description: "In modern web development, making requests to a server is a...",
    },
    {
      src: images.TrendingPostImg2,
      alt: "ReactJs",
      date: "12 May 2024",
      title: "How to Center a Div in CSS",
      description: "Centering a div element in CSS can sometimes be tricky, especially when dealing with different...",
    },
    {
      src: images.TrendingPostImg3,
      alt: "ReactJs",
      date: "07 Jul 2024",
      title: "Understanding the New app/router Folder in Next.js",
      description: "Next.js has introduced the app/router folder as part of its...",
    },
  ];

  return (
    <div className="sticky top-4 z-100">
      <h2 className="text-xl font-bold">Trending Posts</h2>
      <div className="flex flex-col items-start gap-4 mt-4">
        {trendingPosts.map((post, index) => (
          <div key={index} className="flex gap-2 flex-col lg:flex-row items-start">
            <Image src={post.src} alt={post.alt} className="w-full lg:w-[195px] object-cover" />
            <div>
              <p className="text-xs font-medium text-gray-700">{post.date}</p>
              <h1 className="font-semibold leading-5">{post.title}</h1>
              <p className="mt-1 text-xs font-medium text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
