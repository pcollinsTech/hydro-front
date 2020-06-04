import React from "react";
import Head from "next/head";
import {
  Banner,
  Cards,
  MemberOption,
  ReviewText,
  ImageCarousel,
  BookNow,
} from "../../components";
import banner from "../../assets/images/banners/play.png";
import activitiesData from "../../assets/data/play";

const Play = (props) => {
  return (
    <>
      <Head>
        <title>Lets Go Hydro || Play</title>
      </Head>
      <Banner
        title="Play"
        subTitle="Let the action await..."
        bannerImage={banner}
      />
      <Cards data={activitiesData} />
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
  const files = activitiesData.map((activity) => activity.slug);
  console.log("FILES", files);
  const paths = files.map((slug) => ({
    slug,
  }));
  console.log("PATHS", paths);
  return {
    props: { paths },
  };
};
export default Play;
