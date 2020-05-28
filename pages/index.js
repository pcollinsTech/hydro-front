import React from "react";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services";
import MemberOption from "../components/MemberOption";
import ReviewText from "../components/ReviewText";
import ImageCarousel from "../components/ImageCarousel";
import BookNow from "../components/BookNow";
import banner from "../assets/images/banners/home.png";

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Lets Go Hydro</title>
      </Head>
      <Banner title="LET THE <br/> FUN BEGIN..." bannerImage={banner} />
      <Services />
      <br />
      <MemberOption />
      <ReviewText />
      <ImageCarousel />
      <br />
      <BookNow />
    </>
  );
};

export default Index;
