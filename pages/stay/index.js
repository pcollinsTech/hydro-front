import React from "react";
import Head from "next/head";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards";
import MemberOption from "../../components/MemberOption";
import ReviewText from "../../components/ReviewText";
import ImageCarousel from "../../components/ImageCarousel";
import BookNow from "../../components/BookNow";
import banner from "../../assets/images/banners/stay.png";
import staysData from "../../assets/data/stay";

const Stay = (props) => {
  return (
    <>
      <Head>
        <title>Lets Go Hydro || Stay</title>
      </Head>
      <Banner
        title="Stay"
        subTitle="Let the action await..."
        bannerImage={banner}
      />
      <Cards />
      <br />
      <MemberOption />
      <ReviewText />
      <ImageCarousel />
      <br />
      <BookNow />
    </>
  );
};

export const getStaticProps = async () => {
  const files = staysData.map((activity) => activity.slug);
  console.log("FILES", files);
  const paths = files.map((slug) => ({
    slug,
  }));
  console.log("PATHS", paths);
  return {
    props: { paths },
  };
};
export default Stay;
