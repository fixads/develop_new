import { SITE_CONFIG } from '../config/constants';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const initializeMetaPixel = () => {
  // Create and append the Meta Pixel script
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${SITE_CONFIG.metaPixelId}');
    fbq('track', 'PageView');
  `;

  // Add noscript pixel
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${SITE_CONFIG.metaPixelId}&ev=PageView&noscript=1`;
  noscript.appendChild(img);

  // Append to document
  document.head.appendChild(script);
  document.body.appendChild(noscript);
};