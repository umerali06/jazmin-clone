import React from "react";
import Header from "./components/Header";
import "./index.css"; // Ensure Tailwind CSS is imported
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import SubscribeSection from "./components/SubscribeSection";
import VideoCardContainer from "./components/VideoCardContainer";
import TrendingProducts from "./components/TrendingProducts";
import Footer from "./components/Footer";
import SwiperSection from "./components/SwiperSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CardContainer />
      <SubscribeSection />
      <VideoCardContainer />
      <TrendingProducts />
      <SwiperSection />
      <Footer />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
