import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default SEO;
