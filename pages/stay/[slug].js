import React from "react";
import Head from "next/head";
import staysData from "../../assets/data/stay";
import Banner from "../../components/Banner";
const Stay = ({
  stayData: {
    title,
    subTitle,
    description,
    slug,
    img,
    bannerImage,
    pricing,
    whatYouNeed,
    bookingArriving,
    directions,
  },
}) => {
  return (
    <>
      <Head>
        <title>Let's go Hydro || {title}</title>
        <meta title="description" content={description} />
      </Head>
      <Banner title={title} subTitle={subTitle} bannerImage={bannerImage} />
      <div className="container">
        <div className="row">
          <div className="col-sm-7"></div>
          <div className="col-sm-5">
            <h4>Pricing</h4>
            <p>{pricing}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h4>What You Need</h4>
            <p>{whatYouNeed}</p>
          </div>
          <div className="col-sm-4">
            <h4>Booking &amp; Arriving</h4>
            <p>{bookingArriving}</p>
          </div>
          <div className="col-sm-4">
            <h4>Directions</h4>
            <p>{directions}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = staysData.map((stay) => stay.slug);
  console.log("FILES", files);
  const paths = files.map((slug) => ({
    params: {
      slug,
    },
  }));
  console.log("PATHS", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  console.log("PROPS STAT", slug);
  const stayData = staysData.find((stay) => stay.slug === slug);
  return {
    props: {
      stayData,
    },
  };
};

export default Stay;
