import React from "react";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services";
import MemberOption from "../components/MemberOption";
import ReviewText from "../components/ReviewText";
import ImageCarousel from "../components/ImageCarousel";
import BookNow from "../components/BookNow";
import banner from "../assets/images/banners/home.png";
// import activitiesData from "./play/data";

const Index = (props) => {
  console.log(("PROPS", props));
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

// export const getStaticProps = async () => {
//   const files = activitiesData.map((activity) => activity.slug);
//   console.log("FILES", files);
//   const paths = files.map((slug) => ({
//     slug,
//   }));
//   console.log("PATHS", paths);
//   return {
//     props: { paths },
//   };
// };
export default Index;
