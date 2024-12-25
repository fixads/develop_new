import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOTags } from '../../utils/seo';
import type { SEOProps } from '../../types/seo';

const SEO: React.FC<SEOProps> = (props) => {
  const seoData = generateSEOTags(props);

  return (
    <Helmet>
      <title>{seoData.title}</title>
      {seoData.meta.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {seoData.link.map((link, index) => (
        <link key={index} {...link} />
      ))}
    </Helmet>
  );
};

export default SEO;