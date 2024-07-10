"use client";

import { images } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const Post = () => {
  /* const searchParams = useSearchParams();
  const id = searchParams.get("id"); */
  const [post, setPost] = useState({
    id: 1,
    src: images.RecentPostImg,
    alt: "Wearing glasses while coding on a computer",
    date: "27 Jun 2024",
    title: "The Importance of Using Glasses While Coding",
    description: `
In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen. While this is essential for coding, it can take a toll on your eyes. Here, we delve into the importance of using glasses while coding and how they can benefit you.

#### The Strain of Screen Time

Extended periods of screen time can lead to a condition known as Computer Vision Syndrome (CVS), or digital eye strain. Symptoms include:
- **Eye Strain:** Prolonged focus on screens can cause discomfort and fatigue.
- **Dry Eyes:** Staring at screens reduces blink rates, leading to dryness.
- **Blurred Vision:** Extended screen use can cause temporary blurriness.
- **Headaches:** Eye strain often leads to tension headaches.

#### The Role of Glasses in Reducing Eye Strain

Specialized glasses designed for computer use can mitigate the adverse effects of screen time. Here's how they help:

1. **Blue Light Blocking:**
   - Computer screens emit blue light, which can interfere with sleep patterns and cause eye strain. Glasses with blue light filtering lenses reduce exposure to this harmful light, improving comfort and potentially enhancing sleep quality.

2. **Anti-Reflective Coating:**
   - Glare from screens can contribute to eye strain. Glasses with an anti-reflective coating minimize reflections and glare, making it easier to focus on your work.

3. **Magnification:**
   - Some computer glasses offer slight magnification, reducing the effort your eyes need to focus on text and code. This can be particularly beneficial if you work on high-resolution monitors.

4. **UV Protection:**
   - Although not directly related to screen use, many computer glasses also provide UV protection, which is useful for overall eye health.

#### Benefits of Using Glasses While Coding

**Enhanced Comfort:**
- Reduced eye strain and discomfort allow you to work longer and more efficiently.

**Improved Focus:**
- With fewer distractions from glare and blurriness, you can concentrate better on your coding tasks.

**Better Posture:**
- Eye strain often leads to poor posture as you move closer to the screen to see better. Glasses help maintain a healthy distance from the screen, promoting better posture.

**Long-Term Eye Health:**
- Protecting your eyes from the strain and potential damage caused by prolonged screen exposure is crucial for maintaining good vision over time.

#### Choosing the Right Glasses

When selecting glasses for coding, consider the following:
- **Lens Quality:** Ensure the lenses offer blue light filtering, anti-reflective coating, and UV protection.
- **Comfort:** Choose frames that are comfortable for long periods of wear.
- **Prescription Needs:** If you already wear prescription glasses, consider getting a pair specifically designed for computer use.

#### Conclusion

Using glasses while coding is not just about comfort; it's about protecting your eyes and enhancing your productivity. By investing in a good pair of computer glasses, you can mitigate the adverse effects of screen time, improve your coding efficiency, and ensure the long-term health of your eyes. Remember, your vision is one of your most valuable assets as a coder—take care of it!`,
    tags: ["Research", "Health"],
  });

  /* useEffect(() => {
    if (id) {
      const selectedPost = posts.find((post) => post.id === parseInt(id));
      setPost(selectedPost);
    }
  }, [id]);

  if (!post) {
    return (
      <section className="w-4/5 mx-auto my-10 font-poppins">
        <p className="text-center text-xl text-gray-700">Post not found</p>
      </section>
    );
  } */

  return (
    <section className="w-11/12 lg:w-4/5 mx-auto my-10 font-poppins flex flex-col lg:flex-row items-start gap-7">
      <div className="w-full lg:w-3/5">
        <Image
          src={post.src}
          alt={post.alt}
          className="h-[405px] object-cover w-full rounded-lg"
        />
        <p className="mt-3 text-sm font-medium text-gray-700">
          Saad Ksioui - {post.date}
        </p>
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <div className="mt-2 text-sm font-medium text-gray-600 whitespace-pre-wrap">
          <Markdown>{post.description}</Markdown>
        </div>
      </div>
      <div className="w-full lg:w-2/5 h-fit p-3 rounded-xl shadow bg-white">
        <h1 className="text-xl font-semibold">Latest posts</h1>
        <div className="flex flex-col mt-5 gap-3">
          <div className="flex items-start gap-3">
            <Image
              src={images.TrendingPostImg1}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-between h-20">
              <Link href={`/posts/${post.id}`} className="font-semibold leading-5">
                How to Make a Request from a Server Using ReactJS
              </Link>
              <p className="text-xs font-medium text-gray-700 mb-3">05 Jul 2024</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Image
              src={images.TrendingPostImg2}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-between h-20">
              <Link href={`/posts/${post.id}`} className="font-semibold leading-5">
                How to Center a Div in CSS
              </Link>
              <p className="text-xs font-medium text-gray-700 mb-3">27 Jun 2024</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Image
              src={images.TrendingPostImg3}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-between h-20">
              <Link href={`/posts/${post.id}`} className="font-semibold leading-5">
                Understanding the New app/router Folder in Next.js
              </Link>
              <p className="text-xs font-medium text-gray-700 mb-3">07 Jul 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
