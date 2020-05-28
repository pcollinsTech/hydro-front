import React from "react";
import Head from "next/head";
import activitiesData from "./data";

const Activity = ({ activitiesData }) => {
  //   console.log("DATA", activitiesData);
  return (
    <>
      <Head>
        <title>{activitiesData.title}</title>
        <meta title="description" content={activitiesData.description} />
      </Head>
      <div>
        <div>The contents Below</div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = activitiesData.map((activity) => activity.slug);
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

export const getStaticProps = async (props) => {
  console.log("PROPS STAT", props);
  return {
    props: {
      activitiesData,
    },
  };
};

export default Activity;
