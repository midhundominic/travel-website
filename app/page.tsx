import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import TopDestinations from "./components/Destination";

const page = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Category/>
      <TopDestinations/>
    </main>
  );
};

export default page;
