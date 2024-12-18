import Banner from "./HomeLayouts/Banner";
import HotJobs from "./HomeLayouts/HotJobs";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <HotJobs></HotJobs>
      </section>
    </div>
  );
};

export default Home;
