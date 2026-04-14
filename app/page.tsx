import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import TopDestinations from "./components/Destination";
import BookTrip from "./components/BookTrip";
import Testimonials from "./components/Testimonial";
import LogoCarousel from "./components/Carosel";
import SubscribeSection from "./components/NewsLetter";


const page = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Category/>
      <TopDestinations/>
      <BookTrip/>
      <Testimonials/>
      <LogoCarousel/>
      <SubscribeSection/>
    </main>
  );
};

export default page;
