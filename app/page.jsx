import AllPosts from "@components/AllPosts";
import Hero from "@components/Hero";
import RecentPost from "@components/RecentPost";
import TrendingPosts from "@components/TrendingPosts";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="w-4/5 mx-auto mt-10 flex flex-col lg:flex-row items-start gap-5 font-poppins">
        <div className="w-full lg:w-3/5">
          <RecentPost />
        </div>
        <div className="w-full lg:w-2/5 sticky top-4 mt-10 lg:mt-0">
          <TrendingPosts />
        </div>
      </div>
      <AllPosts />
    </div>
  )
};

export default Home
