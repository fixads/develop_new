import { SITE_CONFIG, META_DEFAULTS } from './constants';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const generateSEOTags = ({
  title = META_DEFAULTS.title,
  description = META_DEFAULTS.description,
  image = META_DEFAULTS.image,
  url = `https://${SITE_CONFIG.domain}`,
  type = 'website'
}: SEOProps = {}) => {
  const fullTitle = title === META_DEFAULTS.title ? title : `${title} | ${SITE_CONFIG.name}`;
  
  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url }
    ]
  };
};