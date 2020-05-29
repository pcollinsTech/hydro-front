import React from "react";
import Head from "next/head";
import activitiesData from "./data";
import Banner from "../../components/Banner";

const Activity = ({
  activityData: {
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
  const pages = activitiesData.map((activity) => activity.slug);
  const paths = pages.map((slug) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const activityData = activitiesData.find(
    (activity) => activity.slug === slug
  );
  return {
    props: {
      activityData,
    },
  };
};

export default Activity;
