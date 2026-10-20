import React from "react";
import Header from "../../components/common/Header";
import Hero from "../../components/common/Hero";
import Services from "../../components/common/Services";
import WhyChoose from "../../components/common/WhyChoose";
import PublicLayout from "../../layouts/PublicLayout";

const Home = () => {
  return (
    <>
      <Header />

      <PublicLayout>
        <Hero />
        <Services />
        <WhyChoose />
      </PublicLayout>
    </>
  );
};

export default Home;
