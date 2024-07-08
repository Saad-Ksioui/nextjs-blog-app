import AllPosts from "@components/AllPosts";
import Hero from "@components/Hero";
import RecentPost from "@components/RecentPost";
import TrendingPosts from "@components/TrendingPosts";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="w-4/5 mx-auto mt-10 flex items-start gap-5 font-poppins">
        <div className="w-3/5">
          <RecentPost />
        </div>
        <div className="w-2/5 sticky top-4">
          <TrendingPosts />
        </div>
      </div>
      <AllPosts/>
    </div>
  )
};

export default Home
