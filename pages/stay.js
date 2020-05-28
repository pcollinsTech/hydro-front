import React from "react";
import BookNow from "../components/BookNow";
import ImageCarousel from "../components/ImageCarousel";
import ServiceStay from "../components/Services/ServicesStay";
import Banner from "../components/Banner/Banner";
import banner from "../assets/images/banners/stay.png";
import MemberOption from "../components/MemberOption";

const stay = (props) => {
  return (
    <>
      <Banner
        title="STAY"
        subTitle="Let the relaxation await..."
        bannerImage={banner}
      />
      <br />
      <ServiceStay />
      <MemberOption />
      <br />
      <ImageCarousel />
      <BookNow />
    </>
  );
};

export default stay;
